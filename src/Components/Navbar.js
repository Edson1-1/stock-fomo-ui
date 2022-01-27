

import SVG from "./Commons/Svg";
import SearchBar from "./SearchBar";
export default function Navbar({ showContent }) {

    return (
        <div className="bg-primary-500 relative min-w-full border border-black">
            <div className="flex justify-center md:justify-between py-[30px] md:pt-[33px] md:px-[39px] text-white text-3xl md:text-base h-28">
                <div className=""><b>Stock</b>FOMO</div>
                <div className="hidden md:block">Buy me a coffee</div>
            </div>
            <div>
                {showContent && <div className="px-5 pt-5 mx-auto text-center text-base w-1/2">
                    <SVG className="flex justify-center scale-100" svgName="candleStick" />
                    <h1 className="font-bold text-white py-[32px]">How rich would you be?</h1>
                    <div className="md:mb-0">
                    <p className="text-white text-sm italic">“All there is to investing is picking good stocks at good times and staying with them as long as they remain good companies.”</p>
                    <p className="text-white text-sm font-normal p-1 pb-20">-Warren Buffet</p>
                    </div>
                </div>}
            </div>
            <div className="h-56 md:h-0">
            <SearchBar />
            </div>
        </div>
    )
}