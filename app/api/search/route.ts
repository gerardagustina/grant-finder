import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia' as any,
})

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const searchCounts = new Map<string, number>()
const MAX_SEARCHES = 50

export async function POST(req: NextRequest) {
  try {
    const { sessionId, field, level, description, nationality, destination } = await req.json()

    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not verified' }, { status: 403 })
    }

    const count = searchCounts.get(sessionId) ?? 0
    if (count >= MAX_SEARCHES) {
      return NextResponse.json(
        { error: '50 searches completed', limitReached: true },
        { status: 429 }
      )
    }

    searchCounts.set(sessionId, count + 1)

    const prompt = `You are an expert in European and international academic funding. 
A student needs help finding grants, scholarships, and subsidies for their studies.

Student profile:
- Field of study: ${field}
- Study level: ${level}
- Description: ${description}
- Nationality: ${nationality}
- Destination country: ${destination}

Search the web and find 6-8 real, currently active grants, scholarships, or subsidies that this student can apply for. 
Include EU programs (Erasmus+, Horizon Europe, Marie Curie, etc.), national programs from both their home country and destination country, and any relevant private or institutional grants.

For each grant, return a JSON array with this exact format:
[
  {
    "name": "Grant name",
    "amount": "€X,XXX/month or €X,XXX total",
    "description": "2-3 sentence description of what it is and who qualifies",
    "deadline": "Month Year or 'Rolling' or 'Check website'",
    "eligibility": "Key eligibility requirements in one sentence",
    "tags": ["EU", "Research", "Master's"],
    "url": "https://official-application-url.com",
    "provider": "Organization name"
  }
]

Return ONLY the JSON array. No preamble, no explanation, no markdown code blocks.`

    const message = await (anthropic.messages.create as any)({
      model: 'claude-haiku-4-5',
      max_tokens: 4000,
      tools: [
        {
          type: 'web_search_20250305',
          name: 'web_search',
        } as any,
      ],
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const textContent = (message as any).content
      .filter((block: any) => block.type === 'text')
      .map((block: any) => block.text)
      .join('')

    let grants
    try {
      const clean = textContent.replace(/```json|```/g, '').trim()
      const jsonMatch = clean.match(/\[[\s\S]*\]/)
      if (!jsonMatch) throw new Error('No JSON array found')
      grants = JSON.parse(jsonMatch[0])
    } catch (e) {
      console.error('Failed to parse grants JSON. Raw response:', JSON.stringify(message.content))
      return NextResponse.json({ error: 'Failed to parse results. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ grants })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Search failed. Please try again.' }, { status: 500 })
  }
}