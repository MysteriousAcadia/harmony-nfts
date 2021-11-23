import DarkDropdown from "components/Dropdowns/DarkDropdown/index";
import LightDropdown from "components/Dropdowns/LightDropdown/index";
import TimeInput from "components/Inputs/TimeInput/index";

const OfferExpiration = ({ }) => {
    return (<>
        <div className="">
            <div className="text-lg py-2 text-left pt-6 font-bold w-full">Offer Expiration</div>
            <div className="pb-6 flex items-center">
                <DarkDropdown options={["3 days", "7 days", "1 Month", "Custom"]} />
                <TimeInput />
            </div>
            <div className="text-lg text-center py-6 text-left pt-6 font-bold w-full">Once an offer is placed, it cannot be withdrawn</div>


        </div>
    </>);
}
export default OfferExpiration