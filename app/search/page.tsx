'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

interface Grant {
  name: string
  amount: string
  description: string
  deadline: string
  eligibility: string
  tags: string[]
  url: string
  provider: string
}

function SearchTool() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const [verified, setVerified] = useState(false)
  const [verifying, setVerifying] = useState(true)
  const [field, setField] = useState('')
  const [level, setLevel] = useState("Master's")
  const [description, setDescription] = useState('')
  const [nationality, setNationality] = useState('')
  const [destination, setDestination] = useState('')
  const [loading, setLoading] = useState(false)
  const [grants, setGrants] = useState<Grant[]>([])
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [limitReached, setLimitReached] = useState(false)

  useEffect(() => {
    async function verify() {
      if (!sessionId) { setVerifying(false); return }
      try {
        const res = await fetch('/api/verify-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        })
        const data = await res.json()
        setVerified(data.paid === true)
      } catch {
        setVerified(false)
      } finally {
        setVerifying(false)
      }
    }
    verify()
  }, [sessionId])

  const handleSearch = async () => {
    if (!field || !nationality || !destination) {
      setError('Please fill in all required fields.')
      return
    }
    setError('')
    setLoading(true)
    setGrants([])
    setHasSearched(true)

    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, field, level, description, nationality, destination }),
      })
      const data = await res.json()
      if (data.limitReached) {
        setLimitReached(true)
      } else if (data.error) {
        setError(data.error)
      } else {
        setGrants(data.grants)
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (verifying) {
    return (
      <div className="access-gate">
        <div className="access-gate-inner">
          <div className="loading-spinner" />
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>Verifying access...</p>
        </div>
      </div>
    )
  }

  if (!verified) {
    return (
      <div className="access-gate">
        <div className="access-gate-inner">
          <h2>Access Required</h2>
          <p>You need a valid payment to use GrantFinder. Get lifetime access for just $9.99.</p>
          <a href="/" style={{ display: 'inline-flex', textDecoration: 'none', padding: '14px 32px', borderRadius: '8px', background: '#C9993A', color: '#0D1B2A', fontWeight: '700', fontSize: '16px' }}>
            Get Access — $9.99
          </a>
        </div>
      </div>
    )
  }

  if (limitReached) {
    return (
      <div className="access-gate">
        <div className="access-gate-inner">
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎓</div>
          <h2 style={{ marginBottom: '16px' }}>50 Searches Completed</h2>
          <p style={{ marginBottom: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            You have used all 50 searches included in your plan.
            To continue finding grants, please purchase a new plan.
          </p>
          <p style={{ marginBottom: '32px', fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            Thank you for using GrantFinder!
          </p>
          <a href="/" style={{ display: 'inline-flex', textDecoration: 'none', padding: '14px 32px', borderRadius: '8px', background: '#C9993A', color: '#0D1B2A', fontWeight: '700', fontSize: '16px' }}>
            Get a New Plan — $9.99
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-header">
          <h1>🎓 Find Your Grants</h1>
          <p>Fill in your profile and let the AI find every funding opportunity for you</p>
        </div>

        <div className="search-form-card">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Field of Study *</label>
              <input
                className="form-input"
                placeholder="e.g. Computer Science, Medicine, Architecture"
                value={field}
                onChange={(e) => setField(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Study Level *</label>
              <select className="form-select" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>PhD / Doctorate</option>
                <option>Postdoc / Research</option>
                <option>Short course / Exchange</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Nationality *</label>
              <input
                className="form-input"
                placeholder="e.g. Spanish, French, Brazilian"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Destination Country *</label>
              <input
                className="form-input"
                placeholder="e.g. Germany, Netherlands, USA"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Tell us more (optional but helps)</label>
            <textarea
              className="form-textarea"
              placeholder="e.g. I'm a 23-year-old Spanish student, finishing my engineering degree, want to do a Master's in AI in Berlin starting September 2025. I have a 7.8/10 GPA."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {error && <div className="error-box" style={{ marginBottom: '16px' }}>{error}</div>}

          <button className="btn-search" onClick={handleSearch} disabled={loading}>
            {loading ? '🔍 Searching grants...' : '🔍 Find My Grants'}
          </button>
        </div>

        {loading && (
          <div className="loading-state">
            <div className="loading-spinner" />
            <div className="loading-text" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Searching EU programs, national grants, and scholarships...
            </div>
            <div className="loading-sub">This takes about 15–20 seconds</div>
          </div>
        )}

        {!loading && hasSearched && grants.length === 0 && !error && !limitReached && (
          <div className="loading-state">
            <p style={{ color: 'rgba(255,255,255,0.4)' }}>No results found. Try adjusting your search.</p>
          </div>
        )}

        {grants.length > 0 && (
          <div className="results-section">
            <div className="results-header">Found {grants.length} grants for you</div>
            {grants.map((grant, i) => (
              <div className="grant-card" key={i}>
                <div className="grant-card-top">
                  <div className="grant-name">{grant.name}</div>
                  <div className="grant-amount">{grant.amount}</div>
                </div>
                <div className="grant-body">{grant.description}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
                  <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Provider:</strong> {grant.provider} &nbsp;·&nbsp;
                  <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Deadline:</strong> {grant.deadline} &nbsp;·&nbsp;
                  <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Eligibility:</strong> {grant.eligibility}
                </div>
                <div className="grant-tags">
                  {grant.tags.map((tag, j) => (
                    <span className="grant-tag" key={j}>{tag}</span>
                  ))}
                </div>
                {grant.url && (
                  <a href={grant.url} target="_blank" rel="noopener noreferrer" className="grant-link">
                    Apply / Learn more →
                  </a>
                )}
              </div>
            ))}
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '13px', paddingTop: '16px' }}>
              Run another search to explore different destinations or fields.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="access-gate">
        <div className="loading-spinner" />
      </div>
    }>
      <SearchTool />
    </Suspense>
  )
}