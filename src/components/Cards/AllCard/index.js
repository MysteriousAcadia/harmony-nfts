import { Link } from "react-router-dom";

const AllCard = ({ }) => {
    return (<>
        <Link to="harmoonies" className="glass-2 text-white">
            <div className="relative h-64 m-4 rounded-md bg-gray-400">
                <div className="absolute top-4 right-4 h-8 w-8 bg-gray-300 mx-auto">+</div>
            </div>
            <div className=" w-full truncate  mx-4  font-bold"> Harmoonie #234</div>
            <div className=" truncate  px-4 text-sm mb-4">@Harmoonies</div>
            <div className="flex px-4 pt-8 pb-4 my-4 border-t border-white justify-between items-center">
                <div>
                    <div className="text-sm mb-1">Current Bid</div>
                    <div className="text-base"><b>500 ONE</b> $107,83</div>
                </div>
                <div className="text-sm">3 Days Left</div>

            </div>

        </Link></>);
}
export default AllCard