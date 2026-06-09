'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Home() {
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe-checkout', { method: 'POST' })
      const { url } = await res.json()
      window.location.href = url
    } catch (e) {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-logo">
            🎓 Grant<span>Finder</span>
          </div>
          <button className="nav-cta" onClick={handleBuy}>
            Get Access — $9.99
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">
            🔍 AI-Powered Grant Search
          </div>
          <h1 className="hero-title">
            Find every grant <em>you're missing</em>
          </h1>
          <p className="hero-subtitle">
            Describe your field of study and destination. Our AI scans EU programs, national scholarships, and private grants — and hands you a personalized list in seconds.
          </p>
          <div className="cta-block">
            <button className="btn-primary" onClick={handleBuy} disabled={loading}>
              {loading ? 'Redirecting...' : (
                <>Find My Grants <span className="price-tag">$9.99 once</span></>
              )}
            </button>
            <span className="cta-note">One-time payment · Lifetime access · No subscription</span>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="container">
        <div className="proof-strip">
          <div className="proof-strip-inner">
            <div className="proof-item">
              <span className="proof-number">€12,000</span>
              <div className="proof-label">Average grant found per user</div>
            </div>
            <div className="proof-item">
              <span className="proof-number">30s</span>
              <div className="proof-label">Time to get your results</div>
            </div>
            <div className="proof-item">
              <span className="proof-number">EU + 40</span>
              <div className="proof-label">Countries covered</div>
            </div>
            <div className="proof-item">
              <span className="proof-number">Unlimited</span>
              <div className="proof-label">Searches with one payment</div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2 className="section-title">Three fields.<br />A full funding list.</h2>
          <p className="section-sub">No spreadsheets. No hours on government websites. Just tell us about yourself.</p>

          <div className="how-grid">
            <div className="steps-list">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-content">
                  <h3>Describe your studies</h3>
                  <p>Field, level (Bachelor / Master / PhD), and what you plan to study. The more detail, the better the matches.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-content">
                  <h3>Tell us your destination</h3>
                  <p>Where are you from, and where do you want to study? We search both national and European funding sources.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-content">
                  <h3>Get your personalized list</h3>
                  <p>Our AI returns real grants with amounts, deadlines, and direct links to apply. No noise, no filler.</p>
                </div>
              </div>
            </div>

            {/* DEMO CARD */}
            <div className="demo-card">
              <div className="demo-card-header">Example search result</div>
              <div className="demo-input">
                <span>"MSc Computer Science, Spain → Germany, starting 2025"</span>
              </div>
              <div className="demo-results">
                <div className="demo-grant">
                  <div>
                    <div className="demo-grant-name">Erasmus+ Scholarship</div>
                    <div className="demo-grant-detail">European Commission · Deadline: March 2025</div>
                  </div>
                  <div className="demo-grant-amount">€800/mo</div>
                </div>
                <div className="demo-grant">
                  <div>
                    <div className="demo-grant-name">DAAD Research Grant</div>
                    <div className="demo-grant-detail">Germany · For international students</div>
                  </div>
                  <div className="demo-grant-amount">€1,200/mo</div>
                </div>
                <div className="demo-grant">
                  <div>
                    <div className="demo-grant-name">MEC Mobility Grant</div>
                    <div className="demo-grant-detail">Spain · Nacional · Open applications</div>
                  </div>
                  <div className="demo-grant-amount">€3,500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">One price. Forever.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Pay once, search as many times as you want. No subscription, no credits.
          </p>

          <div className="pricing-card">
            <div className="pricing-badge">🏆 LIFETIME ACCESS</div>
            <div className="pricing-price"><sup>$</sup>9.99</div>
            <div className="pricing-once">one-time payment</div>
            <ul className="pricing-features">
              <li>Unlimited grant searches</li>
              <li>EU programs (Erasmus+, Horizon, ERC...)</li>
              <li>National scholarships in 40+ countries</li>
              <li>Real-time AI search — always up to date</li>
              <li>Direct application links</li>
              <li>Amounts, deadlines, eligibility</li>
            </ul>
            <button className="btn-buy" onClick={handleBuy} disabled={loading}>
              {loading ? 'Loading...' : 'Get Lifetime Access — $9.99'}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section container">
        <div className="section-label">FAQ</div>
        <h2 className="section-title" style={{ marginBottom: '32px' }}>Common questions</h2>

        <div className="faq-item">
          <div className="faq-q">Is the grant data real and up to date?</div>
          <div className="faq-a">Yes. Our AI searches the web in real time every time you run a search, so results reflect current programs and open deadlines — not a stale database.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">What countries and programs are covered?</div>
          <div className="faq-a">We cover all EU programs (Erasmus+, Horizon Europe, ERC, Marie Curie), plus national scholarship programs across 40+ countries including Spain, Germany, France, Netherlands, UK, USA and more.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">What does "lifetime access" mean exactly?</div>
          <div className="faq-a">Pay once, use forever. No monthly fees, no credit packs. Run as many searches as you want, for as many different study plans as you have.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Can I get a refund?</div>
          <div className="faq-a">If the tool doesn't work for you in the first 7 days, email us and we'll refund you — no questions asked.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Do I need to create an account?</div>
          <div className="faq-a">No account needed. After payment you get a unique access link. Bookmark it and use it anytime.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} GrantFinder · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></p>
        </div>
      </footer>
    </>
  )
}
