import { Link } from "react-router-dom";
import HeartEmpty from "assets/heart_empty.svg"
import HeartFilled from "assets/heart_filled.svg"
import "./style.css"
import { useState } from "react";


const AllCard = ({ }) => {
    const [like, setLike] = useState(false);
    return (<>
        <div className="glass-2 text-white">
            <div className="relative h-64 m-4 rounded-md bg-gray-400">
                <div
                    onClick={() => setLike(!like)}
                    className=" cursor-pointer absolute top-4 right-4 rounded-md h-14 w-14 heart-bg mx-auto flex justify-around items-center">
                    <img src={like ? HeartFilled : HeartEmpty} />
                </div>
            </div>
            <Link to="harmoonies" >
                <div className=" w-full truncate  mx-4  font-bold"> Harmoonie #234</div>
                <div className=" truncate  px-4 text-sm mb-4">@Harmoonies</div>
                <div className="flex px-4 pt-8 pb-4 my-4 border-t border-white justify-between items-center">
                    <div>
                        <div className="text-sm mb-1">Current Bid</div>
                        <div className="text-base"><b>500 ONE</b> $107,83</div>
                    </div>
                    <div className="text-sm">3 Days Left</div>

                </div>

            </Link>
        </div>
    </>);
}
export default AllCard