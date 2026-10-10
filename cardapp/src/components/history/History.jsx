import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTransactions } from '../../redux/transactionsSlice'
import FilterHistory from './FilterHistory';
import Loader from '../common/Loader';
import './History.css';

export default function History() {
    const dispatch = useDispatch();
    const { transactions: Transcation, isLoading } = useSelector((state) => state.transactions);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

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
        setCurrentPage(1);
    };

    const handleStartDateChange = (val) => {
        setStartDate(val);
        setCurrentPage(1);
    };

    const handleEndDateChange = (val) => {
        setEndDate(val);
        setCurrentPage(1);
    };

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

    if (isLoading) return <Loader message="Loading transaction history..." />;

    return (
        <div className="history-container">
            <h3>Transcation History</h3>
            <FilterHistory
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
                onClear={handleClearFilter}
            />
            {filteredTransactions.length === 0 ? (
                <p className="no-transactions">No transactions found for the selected date range.</p>
            ) : (
                <>
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
                            {currentTransactions.map((t) => (
                                <tr key={t.transaction_id}>
                                    <td>{new Date(t.timestamp).toLocaleString()}</td>
                                    <td>{t.merchant.name}</td>
                                    <td>${t.amount.toFixed(2)}</td>
                                    <td>{t.payment_method}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {totalPages > 1 && (
                        <div className="pagination-container">
                            <button 
                                className="pagination-btn" 
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span className="pagination-info">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button 
                                className="pagination-btn" 
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
