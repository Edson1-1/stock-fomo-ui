
import Box from "../Commons/Box"
import SVG from "../Commons/Svg";
import upstoxLogo from '../../Assets/Upstox-logo.png';
import growwLogo from '../../Assets/Groww_app_logo 1.png';


const BrokerBox = ({ brokerName, rewardAmount, svgName, imageType="" }) => {

    let imgSrc = ''
    switch(imageType){
        case "upstox" : {imgSrc=upstoxLogo;
        break;
    }
        case "groww" : {
            imgSrc=growwLogo;
        break;
    }
    default: imgSrc = ''
    }

    return (
    <div className="border p-5 rounded-md hover:bg-gray-50 hover:cursor-pointer">
        { !imageType && <SVG className="pb-5" svgName={svgName}/>}
        { imageType && <img src={imgSrc} alt='broker logo' className="pb-5"/>}
        <h1 className="font-semibold">Invest with {brokerName}</h1>
        <p className="text-sm font-thin text-gray-700">Start an account now and earn upto {rewardAmount} INR</p>
    </div>
    )

    }

export default function StartInvestingToday() {

    return (
        <Box className="w-full min-h-full">
            <div className="font-semibold pb-6 ">Start Investing today</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:h-40">
                <BrokerBox brokerName="Zerodha" rewardAmount="300" svgName="zerodha"/>
                <BrokerBox brokerName="Upstox" rewardAmount="150" imageType="upstox"/>
                <BrokerBox brokerName="Groww" rewardAmount="150" imageType="groww"/>
            </div>
        </Box>
    )
}