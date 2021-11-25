import Tippy from "@tippyjs/react";

import ONEInputLight from "components/Inputs/ONEInput/light";
import LightDropdown from "components/Dropdowns/LightDropdown/index";

import InfoIcon from "assets/info_icon.svg";

const TooltipPopup = () => {
	return (
		<div className="bg-main-default">
			<div className="text-white font-light text-md p-2">
				If you don’t receive any bids equal <br />
				to or greater than you reserve, the
				<br /> auction will end without sale.
			</div>
		</div>
	);
};

const TimedAuction = () => {
	const durationOptions = ["7 days", "14 days", "30 days", "90 days", "A year"];

	return (
		<>
			<div className="flex flex-col flex-grow justify-start pr-32">
				<div className="mb-10">
					<div className="mb-4 font-semibold text-xl text-white">
						Starting Price
					</div>
					<ONEInputLight />
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
									<Tippy
										content={<TooltipPopup />}
										placement="bottom-start"
										className="bg-main-default">
										<img
											src={InfoIcon}
											alt="Information"
											className="mt-2 mx-2"
										/>
									</Tippy>
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
