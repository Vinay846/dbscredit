import './History.css';

export default function FilterHistory({ startDate, endDate, onStartDateChange, onEndDateChange, onClear }) {
  const applyPreset = (days, months, years) => {
    const end = new Date();
    const start = new Date();

    if (days) {
      start.setDate(end.getDate() - days);
    } else if (months) {
      start.setMonth(end.getMonth() - months);
    } else if (years) {
      start.setFullYear(end.getFullYear() - years);
    }

    const formatDate = (d) => d.toISOString().split('T')[0];
    onStartDateChange(formatDate(start));
    onEndDateChange(formatDate(end));
  };

  const hasFilter = Boolean(startDate || endDate);

  return (
    <div className="filter-history">
      <div className="filter-inputs-section">
        <div className="filter-group">
          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="end-date">End Date</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </div>
        <button 
          type="button"
          className="clear-filter-btn" 
          onClick={onClear} 
          disabled={!hasFilter}
        >
          Clear Filter
        </button>
      </div>

      <div className="filter-presets-section">
        <span className="presets-label">Quick Filters:</span>
        <button type="button" className="preset-btn" onClick={() => applyPreset(7, 0, 0)}>Last 7 Days</button>
        <button type="button" className="preset-btn" onClick={() => applyPreset(0, 1, 0)}>1 Month</button>
        <button type="button" className="preset-btn" onClick={() => applyPreset(0, 0, 1)}>1 Year</button>
      </div>
    </div>
  );
}
