import InfoIcon from "assets/info_icon.svg";
import ReactTooltip from "react-tooltip";
import PrimaryWhite from "components/Buttons/PrimaryWhite";

const Fee = () => {
	return (
		<div>
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
				<div className="flex flex-col flex-grow justify-between py-4 px-2 text-gray-400 font-normal">
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
