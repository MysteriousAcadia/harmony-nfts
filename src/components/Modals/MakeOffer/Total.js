import { utils } from "ethers";
import { oneToUSD } from "utils/currency";

const Total = ({ price }) => {
    return (<><div className="flex items-center pt-8 justify-between w-full">
        <div className="text-lg  text-left  font-bold ">Item</div>
        <div>
            <div className="font-bold text-xl">{utils.formatEther(price || "0")} ONE</div>

            <div className="mt-1">${utils.formatEther(price || "0")}</div>
        </div>
    </div></>);
}
export default Total