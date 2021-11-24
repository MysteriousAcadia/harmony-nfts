import DollarIcon from "assets/dollar_icon.svg";
import ClockIcon from "assets/clock_icon.svg";

const SaleForm = () => {
	return (
		<div className="text-white">
			<div className="ml-20 mb-6 font-semibold text-xl">Type</div>
			<div className="flex flex-row w-full justify-around">
				<button className="border-2 border-gray-300 px-60 rounded-lg">
					<div className="flex flex-col">
						<img src={DollarIcon} />
						<div>Fixed Price</div>
					</div>
				</button>
				<button className="border-2 border-gray-300 px-60 rounded-lg">
					<div className="flex flex-col">
						<img src={ClockIcon} />
						<div>Timed Auction</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default SaleForm;
