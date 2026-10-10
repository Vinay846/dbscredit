import './Cards.css'

export default function Cards({ card, setDetails }) {
    const handleShowCardDetails = () => {
        setDetails(card);
    }

    const getBrandStyle = (brand) => {
        switch(brand?.toLowerCase()) {
            case 'visa': return 'brand-visa';
            case 'mastercard': return 'brand-mastercard';
            case 'american express': return 'brand-amex';
            default: return 'brand-default';
        }
    };

    return (
        <div className={`credit-card-item ${getBrandStyle(card.card_brand)}`} onClick={handleShowCardDetails}>
            <div className="card-top">
                <span className="card-brand-badge">{card.card_brand}</span>
                <span className={`card-status ${card.status}`}>{card.status}</span>
            </div>
            <div className="card-chip"></div>
            <div className="card-number-display">
                {card.card_number}
            </div>
            <div className="card-bottom">
                <div className="card-holder-info">
                    <span className="card-label">Card Holder</span>
                    <span className="card-value">{card.card_holder}</span>
                </div>
                <div className="card-expiry-info">
                    <span className="card-label">Expires</span>
                    <span className="card-value">{card.expiry_date}</span>
                </div>
            </div>
        </div>
    )
}
