import Tippy from "@tippyjs/react";

import PrimaryWhite from "components/Buttons/PrimaryWhite";

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

const Fee = () => {
	return (
		<div>
			<div className="flex flex-col flex-grow divide-y-2 divide-gray-400">
				<div className="flex flex-row">
					<div className="mb-4 font-semibold text-xl text-white">Fees</div>
					<div>
						<Tippy
							content={<TooltipPopup />}
							placement="bottom-start"
							className="bg-main-default">
							<img src={InfoIcon} alt="Information" className="mt-2 mx-2" />
						</Tippy>
					</div>
				</div>
				<div className="flex flex-col flex-grow justify-between py-4 px-2 text-gray-200 font-light">
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
					<PrimaryWhite className="px-8">Complete Listing</PrimaryWhite>
				</div>
			</div>
		</div>
	);
};

export default Fee;
