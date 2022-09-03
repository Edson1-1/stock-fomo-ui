
import { convertDate, convertDateToString } from "../../helpers/date";
import Box from "../Commons/Box";

function Table({ leftTitle, leftValue, rightTitle, rightValue, rightSubValue }) {

    return (<div className="md:flex md:flex-nowrap justify-between mt-5">
        <div className="mb-5 md:mb-0">
            <h1>{leftTitle}</h1>
            <h1 className="text-primary-500 text-base font-semibold">{leftValue}</h1>
        </div>
        <div >
            <h1>{rightTitle}</h1>
            <h1 className="text-primary-500 text-base font-semibold">{rightValue} <span className="text-xs font-thin text-green-500">{rightSubValue}</span> </h1>
            
        </div>
    </div>)
}

export default function AsOfToday({ tableData = []}) {

    tableData = [
        {
            leftTitle: "Dividends Announced",
            leftValue:"12 Times",
            rightTitle:"Dividend Income",
            rightValue:"96,085 INR"
        },
        {
            leftTitle: "Stock Splits",
            leftValue:"3 Times",
            rightTitle:"Total Shares",
            rightValue:"1,936",
            rightSubValue:"+ 1697.34"
        }
    ]

    const date = convertDate();
    const formattedDate = convertDateToString(date);

    return (
        <Box className="md:h-[187px] text-[12px]">
            <div>
                <h1><span className="font-semibold">As of today</span> - {formattedDate}</h1>
            </div>
            { tableData.map( data => <Table leftTitle={data.leftTitle} leftValue={data.leftValue} rightTitle={data.rightTitle} rightValue={data.rightValue} rightSubValue={data.rightSubValue}  />)}
        </Box>
    );
}
