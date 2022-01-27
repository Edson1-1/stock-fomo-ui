


export default function FomoSuggestions({ amount, ticker, date }) {
    let localeDate = '';
    if( date ){
        const dateOptions = {year: 'numeric', month: 'long', day: 'numeric' };
        localeDate = new Date(date).toLocaleDateString("en-US", dateOptions);
    }
    return (

        <div onClick={() => {}} className="hidden md:inline-block hover:cursor-pointer bg-white hover:bg-gray-100 py-2 px-3 text-center border border-gray-700 rounded-lg my-2 mr-2 text-xs">
            <span className="">If I had invested <span className="font-semibold">{amount} INR</span> in <span className="font-semibold">{ticker}</span> on <span className="font-semibold">{localeDate}</span></span>
        </div>
    )

}

//If I had invested 10,000 INR in TATAMOTORS on 11th May 2019 