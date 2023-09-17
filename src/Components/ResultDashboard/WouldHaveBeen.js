
import SVG from "../Commons/Svg";

export default function WouldHaveBeen({ capitalGain = 0, percentageGrowth = 0.00, growthDirection = ''  , affordableDream = '-'  }) {

    const formatedNumber = capitalGain.toLocaleString('en-IN');

    return (
        <div className="flex justify-between flex-wrap lg:flex-nowrap bg-white rounded-xl lg:max-h-28 min-w-full w-20 mx-auto mt-64 mb-12 md:mt-20 shadow-[0_4px_16px_0px_rgba(121,96,163,0.13)]">


            <div className="mt-8 lg:my-8 left-0 ">
                <SVG svgName="moneyBag" className="scale-110 pl-5" />
            </div>


            <div className="lg:border-r pl-5 lg:pl-0 mt-8 lg:my-5 flex lg:flex-nowrap items-center w-full">

                <div className="left-0 lg:mx-auto">
                    <p className="text-sm py-2">It would have been</p>
                    <h1 className="text-2xl font-semibold text-primary-500">{formatedNumber} INR</h1>
                    <span className="text-sm text-green-600 pb-2">{growthDirection} {parseFloat(percentageGrowth).toFixed(2)}% CAGR</span>
                </div>
            </div>

            <div className="lg:border-r  pl-5 lg:pl-0 mt-8 lg:my-5 flex items-center w-full">
                <div className="left-0 lg:mx-auto">
                    <p className="text-sm py-2">Capital Gain</p>
                    <h1 className="text-sm font-semibold text-primary-500 pb-2">{formatedNumber} INR</h1>
                </div>
            </div>


            <div className="pl-5 lg:pl-0 my-8 lg:my-5 flex items-center w-full">
                <div className="left-0 lg:mx-auto lg:px-6">
                    <p className="text-sm py-2">You would have been able to afford</p>
                    <h1 className="text-sm font-semibold text-primary-500 pb-2">{affordableDream}</h1>
                </div>
            </div>

        </div>
    )
}