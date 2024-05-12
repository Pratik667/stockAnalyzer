import React, { useState } from 'react';
import StockDropdown from './StockDropdown';
import useStockData from './useStockData';
import GraphChart from './graphChart';

const HomePage = () => {
  const { stocksData, loading } = useStockData();
  const [selectedStock, setSelectedStock] = useState('');
  let timestamp = [];
  let datavalue = [];
  selectedStock && (                                     
      stocksData[selectedStock].map((entry) => (
          timestamp.push(getsTime(entry.timestamp)),
          datavalue.push(entry.value)
      ))                
  )

  function getsTime(timestamp) {
    let date = new Date(timestamp*1000); //convert it to milliseconds
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    return `${dd}/${mm}/${yyyy}`;
  }

  function sumofData(data){
    let sum = 0;
    data.forEach( num => {
      sum += num;
    })
    return sum;
  }

  function maxofData(data){
    let largest = 0;
    for(let i=0; i < data.length; i++){
      if (data[i] > largest) {
        largest = data[i];
      }
    }
    return largest;
  }

  function minofData(data){
    let minimum;
    for(let i=0; i < data.length; i++){
      if (data[i] < minimum) {
        minimum = data[i];
      }
    }
    return minimum;
  }

  const handleChange = (event) => {
    setSelectedStock(event.target.value);
  };
  return (
    <section id="dashboard">
      <h1>Stock Data</h1>
      <StockDropdown
        stocksData={stocksData}
        selectedStock={selectedStock}
        onChange={handleChange}
      />
      {loading && <p>Loading...</p>}
      <GraphChart timestamp={timestamp} value={datavalue} />

      <div id="tableContent">
          <p>Timestamp : {timestamp.length}, Target : {Math.round(sumofData(datavalue)/timestamp.length)}, Max : {maxofData(datavalue)}, Min : {minofData(datavalue)}</p>
      </div>
    </section>
  );
};

export default HomePage;