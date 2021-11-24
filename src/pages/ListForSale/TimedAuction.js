import DollarIcon from "assets/dollar_icon.svg";
import ClockIcon from "assets/clock_icon.svg";
import ListingPic from "assets/listing_pic.svg";
import InfoIcon from "assets/info_icon.svg";
import ONEInput from "components/Inputs/ONEInput/index";
import ONEInputLight from "components/Inputs/ONEInput/light";
import LightDropdown from "components/Dropdowns/LightDropdown/index";

import ReactTooltip from "react-tooltip";
import PrimaryWhite from "components/Buttons/PrimaryWhite";
import Artwork from "./Artwork";

const TimedAuction = () => {
	const durationOptions = ["7 days", "14 days", "30 days", "90 days", "A year"];

	return (
		<>
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
					<LightDropdown options={durationOptions} className="w-32" />
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
		</>
	);
};

export default TimedAuction;
