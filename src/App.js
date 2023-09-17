import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, BrowserRouter as Router, useParams } from 'react-router-dom';
import Context from './AppContext';

import Navbar from './Components/Navbar/Navbar';
import FomoSuggestions from './Components/FomoSuggestions';
import ResultDashboard from './Components/ResultDashboard/ResultDashboard';


function App() {

  const { showContent } = useContext(Context)
  
  const suggestionsArray = [
    {
      amount: 10000,
      ticker: "TATAMOTORS",
      date: "2012-01-01",
      symbol: 'NSE:TATAMOTORS'
    },
    {
      amount: 10000,
      ticker: "IRCTC",
      date: "2012-01-01",
      symbol: 'NSE:IRCTC'
    },
    {
      amount: 10000,
      ticker: "INFOSYS",
      date: "2012-01-01",
      symbol: 'NSE:INFY'
    },
    {
      amount: 10000,
      ticker: "TCS",
      date: "2012-01-01",
      symbol: "NSE:TCS"
    },
    {
      amount: 10000,
      ticker: "FEDERALBANK",
      date: "2012-01-01",
      symbol: "NSE:FEDERALBNK"
    }
  ]

  
  return (
    <div className="font-poppins">
      <Router>
        <Navbar showContent={showContent}/>
        {showContent && <div className='hidden md:block my-28 mx-48 scale-75 '>
          <h1>Try these for desperate FOMOs</h1>
          <div className=' grid grid-cols-2'>
            {suggestionsArray.map(sugesstion => (<FomoSuggestions amount={sugesstion.amount} ticker={sugesstion.ticker} date={sugesstion.date} symbol={sugesstion.symbol} />))}
          </div>
        </div>}
        <Routes>
          <Route path='/:companyName' element={ <ResultDashboard /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;