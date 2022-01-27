
import Button from './Commons/Button';
export default function SearchBar() {
    
    return (
        <div className="w-full absolute bottom-0 translate-y-1/2">
            <div className="flex justify-between flex-wrap md:flex-nowrap bg-white rounded-[24px] p-[24px] md:p-[12px] h-full md:h-[80px] w-[356px] md:w-[646px] shadow-[0_4px_20px_-13px_rgba(0,0,0,0.3)] shadow-dropShadow mx-auto">
                
                <div className="w-full border rounded-lg md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:border-black md:border-opacity-5 mb-5 md:mb-0">
                    <label className="pt-1 mb-2 ml-5 block text-left text-gray-700 text-sm font-semibold">If I had invested</label>
                    <input className="mb-2 ml-5 appearance-none block bg-white text-gray-700 rounded leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="10000"/>
                </div>
                
                <div className="w-full border rounded-lg md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:border-black md:border-opacity-5 mb-5 md:mb-0">
                <label className="pt-1 mb-2 ml-5 block text-left text-gray-700 text-sm font-semibold">in</label>
                    <input className="mb-2 ml-5 appearance-none block bg-white text-gray-700 rounded leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Tata Motors"/>
                </div>
                
                <div className="w-full border rounded-lg md:rounded-none md:border-none mb-5 md:mb-0">
                <label className="pt-1 mb-2 ml-5 block text-left text-gray-700 text-sm font-semibold">on</label>
                    <input className="mb-2 ml-5 appearance-none block bg-white text-gray-700 rounded leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="2020-03-01"/>
                </div>
                
                <div className='w-full'>
                    <Button icon="search" text="Search" className="bg-primary-500 hover:bg-primary-700 rounded-[16px] text-white w-full mb-2" />
                    <Button text="Clear" className="md:hidden hover:bg-gray-100 bg-white border border-gray-700 rounded-[16px] text-gray-700 w-full" />

                </div>
            </div>
        </div>
    )
}