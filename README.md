# 🎓 GrantFinder — Setup Guide

## What this is
A micro-SaaS that lets users pay $9.99 once and get unlimited AI-powered grant searches.
Stack: Next.js 14 · Stripe (one-time payment) · Claude AI with web search · Vercel

---

## Step 1 — Create your accounts (all free to start)

1. **Vercel**: https://vercel.com — for hosting
2. **Stripe**: https://stripe.com — for payments
3. **Anthropic**: https://console.anthropic.com — for the AI
4. **GitHub**: https://github.com — to connect to Vercel

---

## Step 2 — Get your API keys

### Anthropic API Key
1. Go to https://console.anthropic.com/settings/keys
2. Create a new key → copy it

### Stripe Keys
1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy **Publishable key** and **Secret key**
3. Go to Products → Create a product:
   - Name: "GrantFinder Lifetime Access"
   - Price: $9.99 · One time
   - Copy the **Price ID** (starts with `price_`)
4. Go to Developers → Webhooks → Add endpoint:
   - URL: `https://your-domain.vercel.app/api/stripe-webhook`
   - Event: `checkout.session.completed`
   - Copy the **Webhook signing secret**

---

## Step 3 — Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → import your repo
3. Add these Environment Variables in Vercel:

```
ANTHROPIC_API_KEY=sk-ant-...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_STRIPE_PRICE_ID=price_...
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

4. Click Deploy → done!

---

## Step 4 — Connect your domain

1. Buy a domain on Namecheap or Porkbun (~$10/year)
2. In Vercel → Settings → Domains → Add your domain
3. Point your domain's DNS to Vercel (they give you the records)

---

## Testing locally

```bash
npm install
cp .env.local.example .env.local
# Fill in your keys in .env.local
npm run dev
```

For Stripe webhooks locally, install Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/stripe-webhook
```

---

## File structure

```
app/
  page.tsx                  ← Landing page
  search/page.tsx           ← The tool (after payment)
  api/
    stripe-checkout/        ← Creates Stripe checkout session
    verify-session/         ← Verifies payment on page load
    search/                 ← Calls Claude AI with web search
    stripe-webhook/         ← Handles Stripe events
```

---

## Going further (after launch)

- Add Supabase to store paid user emails
- Add a "share results" feature
- Add more specific search categories (PhD only, EU only)
- Launch on ProductHunt and Twitter
