import React, { useState, createContext, useEffect} from 'react';
import moment from 'moment';

const Context = createContext({
    amount: null,
    setAmount: () => {},
    symbol: null,
    setSymbol: () => {},
    ticker: null,
    setTicker: () => {},
    showContent: null,
    setShowContent: () => {},
    startDate: null,
    setStartDate: () => {},
});

export function AppContext({ children }) {

    const [amount, setAmount] = useState(0);
    const [companyName, setCompanyName] = useState('');
    const [startDate, setStartDate] = useState(moment('2000-01-01').format('YYYY-MM-DD'));
    const [showContent, setShowContent] = useState(true);
    const [stockData, setStockData] = useState({});
    const [loading, setLoading] = useState(false);

    const setCompanyInfo = async () => {
        try{
            setLoading(true);
            // api call to set stock data
            setTimeout( () => setLoading(false), 5000)
        } catch(error){
            console.log(`Error while fetching info for company: ${companyName}`, { error })
            setLoading(false)
        }
    }

    useEffect( () => {console.log(loading)}, [loading])

  return (
    <Context.Provider value={
        {
            amount,
            setAmount,
            companyName, 
            setCompanyName,
            showContent,
            setShowContent,
            startDate,
            setStartDate,
            setCompanyInfo,
            loading,
            stockData   
        }
    } >
        {children}
    </Context.Provider>
  )
}

export default Context;


