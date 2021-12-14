import BackIcon from "assets/back_icon.svg";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const { marketId, id } = useParams();
	const navigate = useNavigate();
	return (
		<div className="flex flex-row flex-grow justify-between my-20 text-white">
			<div className="flex flex-row cursor-pointer" onClick={() => navigate(`/collections/${marketId}/${id}`)}>
				<img src={BackIcon} alt="Back icon" className="mr-2 cursor-pointer"

				/>
				<div className="text-center text-lg">Back</div>
			</div>

			<div className="font-bold text-3xl">List item for sale</div>

			<div className="w-28 pr-2"></div>
		</div>
	);
};

export default Banner;