export default function Privacy() {
  return (
    <div style={{ maxWidth: 700, margin: '80px auto', padding: '0 24px', fontFamily: 'Inter, sans-serif', color: '#1A1A2E', lineHeight: 1.8 }}>
      <h1 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 40, marginBottom: 24 }}>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <h2 style={{ marginTop: 32, marginBottom: 8, fontSize: 20 }}>What we collect</h2>
      <p>When you purchase, Stripe collects your payment information. We receive only your email address and a payment confirmation. We do not store credit card details.</p>
      <h2 style={{ marginTop: 32, marginBottom: 8, fontSize: 20 }}>How we use it</h2>
      <p>Your email is used only to send access confirmation. Your search queries are sent to the Anthropic AI API to generate results and are not stored by us.</p>
      <h2 style={{ marginTop: 32, marginBottom: 8, fontSize: 20 }}>Third parties</h2>
      <p>We use Stripe for payments and Anthropic for AI processing. Both have their own privacy policies.</p>
      <h2 style={{ marginTop: 32, marginBottom: 8, fontSize: 20 }}>Contact</h2>
      <p>Questions? Email us at hello@grantfinder.io</p>
    </div>
  )
}
