import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


import Navbar from './Components/Navbar';
import FomoSuggestions from './Components/FomoSuggestions';

function App() {

  const [stockData, setStockData] = useState({});
  const [showContent, setShowContent] = useState(true);
  const suggestionsArray=[
    {
      amount: 10000,
      ticker: "TataMotors",
      date: "2012-01-01"
    },
    {
      amount: 10000,
      ticker: "IRCTC",
      date: "2012-01-01"
    },
    {
      amount: 10000,
      ticker: "INFOSYS",
      date: "2012-01-01"
    },
    {
      amount: 10000,
      ticker: "TCS",
      date: "2012-01-01"
    },
    {
      amount: 10000,
      ticker: "FEDERALBANK",
      date: "2012-01-01"
    }
  ]

  // useEffect( () => {
  //   const {data} = require('./test-data.json');
  //   setStockData(data);
  //   setShowContent(false);
  //   return () => {setStockData({}); setShowContent(true)};
  // }, []);

  return (
    <div className="font-poppins">
      <Navbar showContent={showContent} />
      {showContent && <div className='hidden md:block my-28 mx-48 scale-75 '>
        <h1>Try these for desperate FOMOs</h1>
        <div className=' grid grid-cols-2'>
          { suggestionsArray.map( sugesstion => ( <FomoSuggestions amount={sugesstion.amount} ticker={sugesstion.ticker} date={sugesstion.date} />))}
        </div>
      </div>}
      {/* <div className='w-full'>
        <button className='block bg-black text-white rounded p-2 mx-auto bottom-0' onClick={() => setShowContent(!showContent)}>toggle nav</button>
      </div> */}
    </div>
  );
}

export default App;