import PrimaryButton from "components/Buttons/Primary";
import PrimaryBlue from "components/Buttons/PrimaryBlue";
import SecondaryButton from "components/Buttons/Secondary";
import { useNavigate } from "react-router-dom";

const AllCollection = ({ data }) => {
    const navigate = useNavigate();
    const { name = "", id } = data
    return (<div className="relative blur-glass overflow-visible my-8 h-96 mx-8 p-2">
        <div className="bg-gray-200 w-full h-24 rounded-t-lg" />
        <div className="flex flex-col items-center relative bg-white w-full h-68 rounded-b-lg">
            <img className="absolute rounded-full w-32 h-32 bg-gray-400 -mt-16 left-1/2 shadow-lg" style={{ transform: "translate(-50%,0)" }} />
            <div className="text-lg w-full truncate text-center px-2 text-main-default font-bold pt-20"> {name}</div>
            <div className="mt-4 text-center text-base text-main-default">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.</div>
            <PrimaryBlue onClick={() => navigate(`/collections/${id}`)} className="mx-auto mt-4">Explore Collection</PrimaryBlue>

        </div>

        <div className="absolute -bottom-4 left-1/2" style={{ transform: "translate(-50%,0)" }}>

        </div>
    </div>)
}
export default AllCollection;