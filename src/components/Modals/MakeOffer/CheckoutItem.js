import Heading from "components/Texts/Heading";

const CheckoutItem = ({ }) => {
    return (<>
        <div className="text-lg py-2 text-left pt-6 font-bold w-full">Item</div>
        <div className="flex pt-4 w-full items-center justify-between">
            <div className="flex items-center">
                <div className="w-24 h-24 border rounded-sm border-md"></div>
                <div className="text-left ml-4">
                    <div className="mb-1">@Harmoonies</div>
                    <div className="font-bold text-xl">Harmoonie #234</div>
                </div>
            </div>
            <div>
                <div className="font-bold text-xl">500 ONE</div>

                <div className="mt-1">$418.3</div>
            </div>

        </div>
    </>);
}
export default CheckoutItem