import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useParams } from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import FomoSuggestions from './Components/FomoSuggestions';
import ResultDashboard from './Components/ResultDashboard/ResultDashboard';


function App() {

  const [stockData, setStockData] = useState({});
  const [showContent, setShowContent] = useState(true);

  const suggestionsArray = [
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

  return (
    <div className="font-poppins">
      <Router>
        <Navbar showContent={showContent} setShowContent={setShowContent}  />
        {showContent && <div className='hidden md:block my-28 mx-48 scale-75 '>
          <h1>Try these for desperate FOMOs</h1>
          <div className=' grid grid-cols-2'>
            {suggestionsArray.map(sugesstion => (<FomoSuggestions 
            amount={sugesstion.amount} ticker={sugesstion.ticker} date={sugesstion.date} 
            setShowContent={setShowContent}
            />))}

          </div>
        </div>}
        <Routes>
          <Route path='/:ticker' element={<ResultDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;