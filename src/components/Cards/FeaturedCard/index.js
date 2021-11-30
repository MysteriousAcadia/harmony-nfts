import SecondaryButton from "components/Buttons/Secondary"
import { useNavigate } from "react-router-dom"


export const FeatureCard = ({ id = "", image = "", token = "" }) => {
    const navigate = useNavigate();
    return (<div className="relative blur-glass w-64 overflow-visible my-8 h-72 mx-auto p-2">
        <img className="bg-gray-200 w-full h-full rounded-lg" style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover" }} />
        <div className="absolute -bottom-4 left-1/2" style={{ transform: "translate(-50%,0)" }}>
            <SecondaryButton
                onClick={() => navigate(`/collections/${token}/${id}`)}
                className="shadow-lg w-48">View Details</SecondaryButton>
        </div>
        <div className="absolute rounded-lg w-44 truncate text-center top-8 blur-glass md:-left-8 py-2 px-4 font-bold">@{id}</div>
    </div>)
}