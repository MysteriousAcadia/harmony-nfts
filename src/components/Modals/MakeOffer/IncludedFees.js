const IncludedFees = ({ }) => {
    return (<>
        <div className="">
            <div className="text-lg py-2 text-left pt-6 font-bold w-full border-b border-gray-300">Included Fees</div>
            <div className="pl-4 mt-4 pr-2">
                <div className="flex justify-between items-center">
                    <div>Service Fee</div>
                    <div>4.00%</div>
                </div>
                <div className="flex mt-4 justify-between items-center">
                    <div>Reflection to Harmoonie Holders</div>
                    <div>4.00%</div>
                </div>
                <div className="flex mt-4 justify-between items-center">
                    <div>Creator Royalty</div>
                    <div>4.00%</div>
                </div>
            </div>
            <div className="border-gray-300 border-t mt-4" />
        </div>
    </>);
}
export default IncludedFees