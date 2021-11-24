import DollarIcon from "assets/dollar_icon.svg";
import ClockIcon from "assets/clock_icon.svg";
import InfoIcon from "assets/info_icon.svg";
import ONEInput from "components/Inputs/ONEInput/index";
import ONEInputLight from "components/Inputs/ONEInput/light";
import LightDropdown from "components/Dropdowns/LightDropdown/index";
import ReactTooltip from "react-tooltip";
import Fee from "./Fee";
import Artwork from "./Artwork";

const SaleForm = () => {
	const durationOptions = ["7 days", "14 days", "30 days", "90 days", "A year"];

	return (
		<div className="flex flex-col mx-10">
			<div className="text-white">
				<div className="mb-6 font-semibold text-xl">Type</div>
				<div className="flex flex-row mb-24">
					{/* Using div as button with onClick handler for flex grow */}
					<div className="flex flex-col flex-grow h-32 text-center border-2 border-gray-300 rounded-lg py-4 mx-4">
						<img src={DollarIcon} />
						<div>Fixed Price</div>
					</div>
					<div className="flex flex-col flex-grow h-32 text-center border-2 border-gray-300 rounded-lg py-4 mx-4">
						<img src={ClockIcon} style={{ height: "75.3594px" }} />
						<div>Timed Auction</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row flex-grow divide-x-2 divide-gray-400">
				<div className="flex flex-col flex-grow justify-start pr-32">
					<div className="mb-10">
						<div className="mb-4 font-semibold text-xl text-white">
							Starting Price
						</div>
						<ONEInput />
					</div>

					<div className="mb-10 text-white">
						<div className="mb-4 font-semibold text-xl">Method</div>
						<div className="glass-2 py-8 flex flex-col flex-grow items-center text-white">
							<div className="text-xl font-semibold truncate">
								Sell to highest bidder
							</div>
						</div>
					</div>

					<div className="mb-10 text-white flex flex-col flex-grow">
						<div className="mb-4 font-semibold text-xl">Duration</div>
						<LightDropdown options={durationOptions} className="w-max" />
					</div>

					<div className="mb-10">
						<div className="flex flex-row">
							<div className="mb-4 font-semibold text-xl text-white">
								<div className="flex flex-row">
									<div>Include Reserve Price</div>
									<div>
										<img
											src={InfoIcon}
											alt="Information"
											className="mt-2 mx-2"
											data-tip="If you don’t receive any bids equal to or greater than you reserve, the auction will end without sale."
										/>
										<ReactTooltip
											place="bottom"
											type="dark"
											effect="solid"
											event="click"
										/>
									</div>
								</div>
							</div>
							<div>Slider</div>
						</div>
						<ONEInputLight />
					</div>
				</div>

				<Artwork />
			</div>
			<Fee />
		</div>
	);
};

export default SaleForm;
