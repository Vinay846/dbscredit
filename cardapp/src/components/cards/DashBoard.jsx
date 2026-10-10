import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCards, setSelectedCard, clearSelectedCard } from '../../redux/cardsSlice'
import Cards from './Cards';
import './DashBoard.css';
import CardDetails from './CardDetails';
import History from '../history/History';
import Loader from '../common/Loader';

export default function DashBoard() {
    const dispatch = useDispatch();
    const { cards, selectedCard, isLoading } = useSelector((state) => state.cards);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

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
            {selectedCard ?
                <div className='cardDetails'>
                    <CardDetails 
                        details={selectedCard} 
                        onBack={() => dispatch(clearSelectedCard())} 
                        onShowTransaction={() => setShowHistory(true)} 
                    />
                </div>
                :
                <div>
                    <h3>DashBoard</h3>

                    <div className='cards'>
                        {cards.map((c) => (
                            <Cards key={c.id} card={c} setDetails={(card) => dispatch(setSelectedCard(card))} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
