import Tippy from "@tippyjs/react";

import ONEInputLight from "components/Inputs/ONEInput/light";
import LightDropdown from "components/Dropdowns/LightDropdown/index";

import InfoIcon from "assets/info_icon.svg";

const TooltipPopup = () => {
	return (
		<div className="bg-main-default rounded-lg">
			<div className="text-white font-light text-md p-2">
				List price and list schedule cannot
				<br /> be edited once the item is listed.
				<br /> You will need to cancel your listing
				<br /> and relist the item with the
				<br /> updated price and dates.
			</div>
		</div>
	);
};

const FixedPrice = () => {
	const durationOptions = ["7 days", "14 days", "30 days", "90 days", "A year"];

	return (
		<>
			<div className="flex flex-row flex-grow divide-x-2 divide-gray-400">
				<div className="flex flex-col flex-grow justify-start pr-32">
					<div className="mb-10">
						<div className="flex flex-row">
							<div className="mb-4 font-semibold text-xl text-white">Price</div>
							<div>
								<Tippy
									content={<TooltipPopup />}
									placement="bottom-start"
									className="bg-main-default rounded-lg">
									<img src={InfoIcon} alt="Information" className="mt-2 mx-2" />
								</Tippy>
							</div>
						</div>
						<ONEInputLight />
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
								</div>
							</div>
							<div>Slider</div>
						</div>
						<ONEInputLight />
					</div>
				</div>
			</div>
		</>
	);
};

export default FixedPrice;
