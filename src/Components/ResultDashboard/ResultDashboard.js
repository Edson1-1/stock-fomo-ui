
import NoResult from './NoResult';
import WouldHaveBeen from './WouldHaveBeen';
import ImportantEventsTable from './ImportantEventsTable';
import AsOfToday from './AsOfToday';
import AdDisplay from './AdDisplay';
import StartInvestingToday from './StartInvestingToday';

export default function ResultDashboard(props) {

    const data = {
        success: true
    }

    if (data.success) {
        let ad = false;
        return (
            <div className='block md:px-24 px-10 mx-auto'>
                <WouldHaveBeen capitalGain={4675860} percentageGrowth={457.57} growthDirection='+' affordableDream='Audi A4' />
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