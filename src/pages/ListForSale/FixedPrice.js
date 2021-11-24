import ListingPic from "assets/listing_pic.svg";
import InfoIcon from "assets/info_icon.svg";
import ONEInput from "components/Inputs/ONEInput/index";
import ONEInputLight from "components/Inputs/ONEInput/light";
import LightDropdown from "components/Dropdowns/LightDropdown/index";

import ReactTooltip from "react-tooltip";
import PrimaryWhite from "components/Buttons/PrimaryWhite";

const FixedPrice = () => {
	const durationOptions = ["7 days", "14 days", "30 days", "90 days", "A year"];

	return (
		<>
			<div className="flex flex-row flex-grow divide-x-2 divide-gray-400">
				<div className="flex flex-col flex-grow justify-start pr-32">
					<div className="mb-10">
						<div className="mb-4 font-semibold text-xl text-white">Price</div>
						<ONEInput />
					</div>

					<div className="mb-10 text-white flex flex-col flex-grow">
						<div className="mb-4 font-semibold text-xl">Duration</div>
						<LightDropdown options={durationOptions} className="w-32" />
					</div>

					<div className="mb-10">
						<div className="flex flex-row">
							<div className="mb-4 font-semibold text-xl text-white">
								<div className="flex flex-row">
									<div>Reserve for specific buyer</div>
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

				<div className="flex flex-col pl-32 text-white justify-center align-middle">
					<img src={ListingPic} alt="List for Sale Pic" className="mb-6" />
					<div className="font-light text-md">@Harmoonies</div>
					<div className="font-semibold text-lg">Harmoonie #234</div>
				</div>
			</div>
			<div className="flex flex-col flex-grow divide-y-2 divide-gray-400">
				<div className="flex flex-row">
					<div className="mb-4 font-semibold text-xl text-white">Fees</div>
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
				<div className="flex flex-col flex-grow justify-between py-4 px-2 text-gray-300 font-light">
					<div className="flex flex-row justify-between">
						<div>Service Fee</div>
						<div>4.00%</div>
					</div>
					<div className="flex flex-row justify-between">
						<div>Reflection to Harmoonie holders</div>
						<div>1.00%</div>
					</div>
					<div className="flex flex-row justify-between">
						<div>Creator Royalty</div>
						<div>3.00%</div>
					</div>
				</div>
				<div className="flex flex-row justify-center align-middle py-16">
					<PrimaryWhite>Complete Listing</PrimaryWhite>
				</div>
			</div>
		</>
	);
};

export default FixedPrice;
