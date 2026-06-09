import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia' as any,
})

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json()
    if (!sessionId) return NextResponse.json({ paid: false })

    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return NextResponse.json({ paid: session.payment_status === 'paid' })
  } catch {
    return NextResponse.json({ paid: false })
  }
}
