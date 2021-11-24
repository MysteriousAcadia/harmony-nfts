import { Link } from "react-router-dom";
import HeartEmpty from "assets/heart_empty.svg"
import HeartFilled from "assets/heart_filled.svg"
import "./style.css"
import { useState } from "react";
import { utils } from "ethers";
import { daysLeft } from "utils/date";

const AllCard = ({ data = {} }) => {
    const [like, setLike] = useState(false);
    const { currentAuction = {}, currentSellOrder = {}, image, tokenId, id } = data;
    const { highestBid, endsAt, sellerA } = (currentAuction || {});
    const { seller: sellerS, price } = (currentSellOrder || {})
    return (<>
        <div className="glass-2 text-white">
            <div className="relative h-64 m-4 rounded-md bg-gray-400" style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover" }}>
                <div
                    onClick={() => setLike(!like)}
                    className=" cursor-pointer absolute top-4 right-4 rounded-md h-14 w-14 heart-bg mx-auto flex justify-around items-center">
                    <img src={like ? HeartFilled : HeartEmpty} />
                </div>
            </div>
            <Link to={`${id}`} >
                <div className=" w-full truncate  mx-4  font-bold"> Harmoonie #234</div>
                <div className=" truncate  px-4 text-sm mb-4">@{sellerA?.address || sellerS?.address || "Unknown"}</div>
                {(price && sellerS) &&
                    <div className="flex px-4 pt-8 pb-4 my-4 border-t border-white justify-between items-center">
                        <div>
                            <div className="text-sm mb-1">Price</div>
                            <div className="text-base"><b>{utils.formatEther(price)} ONE</b> $107,83</div>
                        </div>

                    </div>
                }
                {(highestBid && endsAt) &&
                    <div className="flex px-4 pt-8 pb-4 my-4 border-t border-white justify-between items-center">
                        <div>
                            <div className="text-sm mb-1">Current Bid</div>
                            <div className="text-base"><b>{utils.formatEther(highestBid)} ONE</b> $107,83</div>
                        </div>
                        <div className="text-sm ml-2">{daysLeft(endsAt)}</div>

                    </div>
                }

            </Link>
        </div>
    </>);
}
export default AllCard