import PrimaryButton from "components/Buttons/Primary";
import PrimaryBlue from "components/Buttons/PrimaryBlue";
import SecondaryButton from "components/Buttons/Secondary";
import { useNavigate } from "react-router-dom";
import Banner from "assets/banner.png";
import Profile from "assets/profile_crop.png";
const AllCollection = ({ data = {} }) => {
    const navigate = useNavigate();
    const { name = "", id } = data
    return (<div className="relative blur-glass overflow-visible my-8 h-96 mx-8 p-2">
        <img src={Banner} className="bg-gray-200 w-full h-24 rounded-t-lg object-cover" />
        <div className="flex flex-col items-center relative bg-white w-full h-68 rounded-b-lg">
            <img src={Profile} className="absolute rounded-full w-32 h-32 bg-gray-400 -mt-16 left-1/2 shadow-lg" style={{ transform: "translate(-50%,0)" }} />
            <div className="text-lg w-full truncate text-center px-2 text-main-default font-bold pt-20"> {name}</div>
            <div className="m-4 text-center text-base text-main-default">We are Harmoonies! We are a family of 10,000 unique, fun and cute faces.</div>
            <PrimaryBlue onClick={() => navigate(`/collections/${id}`)} className="mx-auto mt-4">Explore Collection</PrimaryBlue>

        </div>

        <div className="absolute -bottom-4 left-1/2" style={{ transform: "translate(-50%,0)" }}>

        </div>
    </div>)
}
export default AllCollection;