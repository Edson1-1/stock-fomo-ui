

(async () => {
    // const fetch = require('node-fetch');
    const { default: fetch } = await import('node-fetch');
    // const moment = require('moment');
    const { default: moment } = await import('moment');

    const yahooAPI = "https://us-central1-stockfomo.cloudfunctions.net/get-stock-info";
    console.log('Fething data from yahoo api')
    const data = await (await fetch(`${yahooAPI}?symbol=INFY.NS`)).json();
    const inputDate = '2001-01-01';

    const dataObj = {};
    console.log('creating dividend object')
    for( const date in data.actions.Dividends){
        if( !dataObj[date] && (moment(inputDate) < moment(parseInt(date))) && (data.actions.Dividends[date] > 0)  ){
            dataObj[date] = {
                date: moment(parseInt(date)).format('MM-DD-YYYY'),
                action: 'dividend',
                value: data.actions.Dividends[date]
            }
        }
    }


    console.log('creating split object')

    for( const date in data.actions['Stock Splits']){
        if( !dataObj[date] && (moment(inputDate) < moment(parseInt(date))) && (data.actions['Stock Splits'][date] > 0)  ){
            dataObj[date] = {
                date: moment(parseInt(date)).format('MM-DD-YYYY'),
                action: 'split',
                value: data.actions['Stock Splits'][date]
            }
        }
    }

    // Object.keys(splitObj).sort( (a,b) => parseInt(b) - parseInt(a)).forEach( key => console.log(key, dateObj[key]))


    const findSplitFactor = (date) => {
        const splitFactor = Object.keys(dataObj).reduce( (acc, curr) => {
            if( dataObj[curr].action === 'split'){
                if(moment(date) < moment(parseInt(curr)) ){
                    acc += dataObj[curr].value
                }
            }
            return acc;
        }, 0)
        return splitFactor !== 0 ? splitFactor : 1;
    }

    const sheetsApi =  "https://script.google.com/macros/s/AKfycbywDSk2MDmVpaO2DMxc8r_R8KpTC0B1k-Yzt4eM7vI4QZDrItPscnAXGaINRtBKBcDZyg/exec";
    const inputAmount = 10000;

    // Object.keys(dataObj).sort( (a,b) => parseInt(b) - parseInt(a)).forEach( key => console.log(key, dataObj[key]))

    console.log('Fetching prices');

    
    const dates = Object.keys(dataObj).sort( (a,b) => parseInt(b) - parseInt(a)).map( date => moment(parseInt(date)).format('MM-DD-YYYY'));
    // console.log('dates:', dates);
    const priceData = await ( await fetch(sheetsApi, {
        method: 'POST',
        body: JSON.stringify({
            symbol: 'NSE:INFY',
            dates
        })
    })).json();

    console.log('assinging price')
    Object.keys(dataObj).sort( (a,b) => parseInt(b) - parseInt(a)).forEach( (dateKey, index) => {
        dataObj[dateKey].closePrice = priceData.price[index].close;
        dataObj[dateKey].apiDate = priceData.price[index].date;
        dataObj[dateKey].splitFactor = findSplitFactor(moment(parseInt(dateKey)).toISOString());

    })


    Object.keys(dataObj).sort( (a,b) => parseInt(b) - parseInt(a))
    .forEach( (dateKey, index) => {
        console.log(JSON.stringify(dataObj[dateKey], 0, 2))
    })




    
    





})()


// (async () => {
//     const URL = "https://script.google.com/macros/s/AKfycbywDSk2MDmVpaO2DMxc8r_R8KpTC0B1k-Yzt4eM7vI4QZDrItPscnAXGaINRtBKBcDZyg/exec";
//     const res = await fetch(URL, {
//         method: "POST",
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

// (async () => {
//     const URL = "https://script.google.com/macros/s/AKfycbywDSk2MDmVpaO2DMxc8r_R8KpTC0B1k-Yzt4eM7vI4QZDrItPscnAXGaINRtBKBcDZyg/exec";
//     const res = await fetch(URL, {
//         method: "POST",
//         body: JSON.stringify({
//                 "symbol": "NSE:INFY",
//                 "dates": [
//                     '30-04-1999'
//                   ]
//             }
//         )});
//     console.log(await res.json());
// })();