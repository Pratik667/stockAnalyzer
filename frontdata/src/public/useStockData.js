import { useState, useEffect } from 'react';

const useStockData = () => {
    const [stocksData, setStocksData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/all')
            .then(response => response.json())
            .then(data => {
                setStocksData(data.data.stocksData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching stocks data:', error);
                setLoading(false);
            });
    }, []);

    return { stocksData, loading };
};

export default useStockData;
