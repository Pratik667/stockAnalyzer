import React from 'react';

const StockDropdown = ({ stocksData, selectedStock, onChange }) => {
    return (
        <div id="stockDropdown">
            <label htmlFor="stocks">Select a stock:</label>
            <select id="stocks" value={selectedStock} onChange={onChange}>
                <option value="">Select a stock</option>
                {Object.keys(stocksData).map((stock) => (
                    <option key={stock} value={stock}>
                        {stock}
                    </option>
                ))}
            </select>
        </div>

    );
};

export default StockDropdown;
