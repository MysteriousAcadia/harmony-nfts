import BackIcon from "assets/back_icon.svg";

const Banner = () => {
	return (
		<div className="flex flex-row justify-between my-20 text-white">
			<div className="flex flex-row">
				<img src={BackIcon} alt="Back icon" className="mr-2" />
				<div className="text-center text-lg">Back</div>
			</div>

			<div className="font-bold text-2xl">List item for sale</div>

			<div></div>
		</div>
	);
};

export default Banner;
