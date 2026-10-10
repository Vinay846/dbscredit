import { useState } from 'react'
import { getTransactionData } from '../../services/services';
import { useFetch } from '../../hooks/useFetch';
import FilterHistory from './FilterHistory';
import Loader from '../common/Loader';
import './History.css';

export default function History() {
    const { data: Transcation, isLoading } = useFetch(getTransactionData);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const filteredTransactions = Transcation.filter((t) => {
        if (!startDate && !endDate) return true;
        const tDate = t.timestamp ? t.timestamp.split('T')[0] : '';
        if (startDate && tDate < startDate) return false;
        if (endDate && tDate > endDate) return false;
        return true;
    });

    const handleClearFilter = () => {
        setStartDate('');
        setEndDate('');
    };

    if (isLoading) return <Loader message="Loading transaction history..." />;

    return (
        <div className="history-container">
            <h3>Transcation History</h3>
            <FilterHistory
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onClear={handleClearFilter}
            />
            {filteredTransactions.length === 0 ? (
                <p className="no-transactions">No transactions found for the selected date range.</p>
            ) : (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Merchant</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map((t) => (
                            <tr key={t.transaction_id}>
                                <td>{new Date(t.timestamp).toLocaleString()}</td>
                                <td>{t.merchant.name}</td>
                                <td>${t.amount.toFixed(2)}</td>
                                <td>{t.payment_method}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
