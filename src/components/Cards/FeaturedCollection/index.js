import PrimaryButton from "components/Buttons/Primary";
import PrimaryBlue from "components/Buttons/PrimaryBlue";
import SecondaryButton from "components/Buttons/Secondary";

const FeaturedCollection = () => {
    return (<div className="relative blur-glass overflow-visible my-8 h-96 mx-8 p-2">
        <div className="bg-gray-200 w-full h-32 rounded-t-lg" />
        <div className="flex flex-col items-center relative bg-white w-full h-60 rounded-b-lg">
            <img className="absolute rounded-full w-32 h-32 bg-gray-400 -mt-16 left-1/2 shadow-lg" style={{ transform: "translate(-50%,0)" }} />
            <div className="text-lg w-full truncate text-center px-2 text-main-default font-bold pt-24"> Harmoonies</div>
            <PrimaryBlue className="mx-auto mt-4">See Details</PrimaryBlue>

        </div>

        <div className="absolute -bottom-4 left-1/2" style={{ transform: "translate(-50%,0)" }}>

        </div>
        <div className="absolute rounded-lg w-44 truncate text-center top-8 blur-glass -left-8 py-2 px-4 font-bold text-main-default">Coming Soon</div>
    </div>)
}
export default FeaturedCollection;