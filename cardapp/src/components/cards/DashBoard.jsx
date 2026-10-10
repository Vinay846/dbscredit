import { useState } from 'react'
import Cards from './Cards';
import { getCardDeatils } from '../../services/services';
import { useFetch } from '../../hooks/useFetch';
import './DashBoard.css';
import CardDetails from './CardDetails';
import History from '../history/History';
import Loader from '../common/Loader';

export default function DashBoard() {
    const { data: cards, isLoading } = useFetch(getCardDeatils);
    const [details, setDetails] = useState({});
    const [showHistory, setShowHistory] = useState(false);

    if (isLoading) return <Loader message="Loading card details..." />;

    if (showHistory) {
        return (
            <div className='dashBoard'>
                <button 
                    className="clear-filter-btn" 
                    onClick={() => setShowHistory(false)}
                    style={{ marginBottom: '15px' }}
                >
                    ← Back to Dashboard
                </button>
                <History />
            </div>
        );
    }

    return (
        <div className='dashBoard'>
            {Object.keys(details).length > 0 ?
                <div className='cardDetails'>
                    <CardDetails 
                        details={details} 
                        onBack={() => setDetails({})} 
                        onShowTransaction={() => setShowHistory(true)} 
                    />
                </div>
                :
                <div>
                    <h3>DashBoard</h3>

                    <div className='cards'>
                        {cards.map((c) => (
                            <Cards key={c.id} card={c} setDetails={setDetails} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
