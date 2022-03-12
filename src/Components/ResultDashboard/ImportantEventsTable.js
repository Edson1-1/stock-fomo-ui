

import Box from "../Commons/Box";
export default function ImportantEventsTable(props) {
    { /*importantEvents = [] */ }

    const importantEvents = [
        {
            eventTitle: "Initial Investment",
            capitalAmount: "10000",
            titleValue: "41.9 INR per stock",
            capitalQuantity: "239 shares"
        },
        {
            eventTitle: "Stock Split",
            capitalAmount: "24654",
            titleValue: "1:5",
            capitalQuantity: ""
        },
        {
            eventTitle: "Dividend",
            capitalAmount: "37863",
            titleValue: "5 INR",
            capitalQuantity: ""
        },
        {
            eventTitle: "End of Year 2019",
            capitalAmount: "56763",
            titleValue: "70.3 INR per stock",
            capitalQuantity: ""
        },
        {
            eventTitle: "Dividend",
            capitalAmount: "135987",
            titleValue: "2.5 INR",
            capitalQuantity: ""
        },
        {
            eventTitle: "End of Year 2020",
            capitalAmount: "569763",
            titleValue: "70.3 INR per stock",
            capitalQuantity: ""
        }
    ]

    return (
        <Box className="text-[12px]">
            {/* table header */}
            <div className="flex justify-between font-semibold pb-10 w-full">
                <h1>Important Events</h1>
                <h1>Capital Amount</h1>
            </div>
            {/* body */}
            {importantEvents && !!importantEvents.length && importantEvents.map(eventItem => {
                let capitalAmount = eventItem.capitalAmount || 0;
                if (eventItem.capitalAmount && !isNaN(eventItem.capitalAmount)) {
                    capitalAmount = capitalAmount.toLocaleString('en-IN');
                };
                return (
                    <div className="pb-10">
                        <div className="flex justify-between">
                            <span>{eventItem.eventTitle}</span>
                            <span>{capitalAmount} INR</span>
                        </div>
                        {(eventItem.titleValue || eventItem.capitalQuantity) && <div className="flex justify-between text-[8px]"> {/* make this div optional */}
                            <span>{eventItem.titleValue}</span> {/* show only if data is available */}
                            <span>{eventItem.capitalQuantity}</span> {/* show only if data is available */}
                        </div>}
                    </div>
                )
            })}
        </Box>
    )
}