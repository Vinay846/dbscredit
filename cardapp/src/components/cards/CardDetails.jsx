export default function CardDetails({ details, onBack, onShowTransaction }) {
  const limits = details.card_limits || {};
  const address = details.billing_address || {};

  return (
    <div className="card-details-container">
      <div className="card-details-header">
        <div>
          <h3>Card Management & Details</h3>
          <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px' }}>Manage your credit card details and view financial limits</p>
        </div>
        <button className="back-btn" onClick={onBack}>← Back to Cards</button>
      </div>

      <div className="card-details-grid">
        <div className="card-info-box">
          <h4 style={{ margin: '0 0 16px 0', color: '#1e293b', fontSize: '16px' }}>Card Information</h4>
          <div className="info-row">
            <span className="info-label">Card Holder</span>
            <span className="info-value">{details.card_holder}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Card Number</span>
            <span className="info-value">{details.card_number}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Card Brand</span>
            <span className="info-value">{details.card_brand}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Expiry Date</span>
            <span className="info-value">{details.expiry_date}</span>
          </div>
          <div className="info-row">
            <span className="info-label">CVV</span>
            <span className="info-value">{details.cvv}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Status</span>
            <span className={`card-status ${details.status}`}>{details.status}</span>
          </div>
        </div>

        <div className="card-financials-box">
          <h4 style={{ margin: '0 0 16px 0', color: '#1e293b', fontSize: '16px' }}>Financial Summary</h4>
          <div className="financial-metric">
            <span className="metric-label">Credit Limit</span>
            <span className="metric-value">${limits.credit_limit?.toLocaleString() || '0.00'} {limits.currency}</span>
          </div>
          <div className="financial-metric">
            <span className="metric-label">Available Credit</span>
            <span className="metric-value available">${limits.available_credit?.toLocaleString() || '0.00'} {limits.currency}</span>
          </div>
          
          <h4 style={{ margin: '24px 0 12px 0', color: '#1e293b', fontSize: '16px' }}>Billing Address</h4>
          <p className="address-text">
            {address.street}<br />
            {address.city}, {address.state} {address.zip_code}<br />
            {address.country}
          </p>

          <div className="card-actions">
            <button className="action-btn primary" onClick={onShowTransaction}>View Transactions</button>
          </div>
        </div>
      </div>
    </div>
  )
}
