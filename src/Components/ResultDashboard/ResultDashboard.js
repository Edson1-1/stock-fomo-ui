
import NoResult from './NoResult';
import WouldHaveBeen from './WouldHaveBeen';
import ImportantEventsTable from './ImportantEventsTable';
import AsOfToday from './AsOfToday';
import AdDisplay from './AdDisplay';
import StartInvestingToday from './StartInvestingToday';
import Loader from '../Loader/Loader';
import { useEffect, useState, useContext } from 'react';
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Context from '../../AppContext';
import moment from 'moment';

const URL = "https://script.google.com/macros/s/AKfycbywDSk2MDmVpaO2DMxc8r_R8KpTC0B1k-Yzt4eM7vI4QZDrItPscnAXGaINRtBKBcDZyg/exec";

//         body: JSON.stringify({
//                 "symbol": "NSE:INFY",
//                 "dates": [
//                     "01/09/2022",
//                     "01/01/2021"
//                 ]
//             }
//         )});
//     console.log(await res.json());
// })();

export default function ResultDashboard() {

    const { 
        setShowContent, 
        loading,
        stockData 
    } = useContext(Context)

    useEffect( () => {
        setShowContent(false);
        return () => setShowContent(true)
    }, [])

    const data = {
        success: true
    }

    const calculate = ({ investedAmount = 0, startPrice = 0, currentPrice =0, startDate = moment()}) => {
        const numberOfStocks = Math.floor(investedAmount/startPrice);
        const numberOfYears = moment().diff(startDate, 'years');
        const currentValue = numberOfStocks * currentPrice;
        const initialAmount = numberOfStocks * startPrice;

        const cagr = (Math.pow((currentValue/initialAmount), (1/numberOfYears)) - 1) * 100;
        return {
            numberOfStocks: 0,
            currentValue: 1000,
            cagr: 18,
            initialAmount: 100,
            numberOfYears: 10
        }
    }

    if(loading){
        return (<div className='flex justify-center my-[192px]'><Loader /></div>)
    } else if (stockData?.success) {
        let ad = false;
        const {
            numberOfStocks,
            currentValue,
            cagr,
            initialAmount,
            numberOfYears
        } = calculate({investedAmount: 0, 
        startPrice: 0, 
        currentPrice: 0,
        startDate: 0,
    });
   
        return (
            <div className='block md:px-24 px-10 mx-auto'>
                <WouldHaveBeen capitalGain={currentValue} percentageGrowth={cagr} growthDirection={ currentValue >= initialAmount ? '+': '-'} affordableDream='Audi A4' />
                <div className='grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-x-10'>
                    <div className="row-span-2 lg:col-span-2 mb-14 lg:mb-0">
                        <ImportantEventsTable />
                    </div>
                    <div className={`w-full lg:col-span-${ ad ? 3: 4} mb-14 lg:mb-0`}>
                        <AsOfToday />
                    </div>
                    {ad && <div className="w-full lg:col-span-1 mb-14 lg:mb-0">
                        <AdDisplay />
                    </div>}
                    <div className="w-full lg:col-span-4 mb-14 lg:mb-0">
                        <StartInvestingToday />
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className='my-56 md:my-32'>
                <NoResult />
            </div>
        )
    }

}