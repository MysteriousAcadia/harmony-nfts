import { utils } from "ethers";
import { oneToUSD } from "utils/currency";

const CheckoutItem = ({ price, tokenId, image, ownerAddress }) => {
    return (<>
        <div className="text-lg py-2 text-left pt-6 font-bold w-full">Item</div>
        <div className="flex pt-4 w-full items-center justify-between">
            <div className="flex items-center">
                <div className="w-24 h-24 border rounded-sm border-md" style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover" }}></div>
                <div className="text-left ml-4">
                    <div className="mb-1">@{ownerAddress}</div>
                    <div className="font-bold text-xl">Harmoonie #{tokenId}</div>
                </div>
            </div>
            <div>
                <div className="font-bold text-xl">{utils.formatEther(price || "0")} ONE</div>

                <div className="mt-1">${oneToUSD(utils.formatEther(price || "0"))}</div>
            </div>

        </div>
    </>);
}
export default CheckoutItem