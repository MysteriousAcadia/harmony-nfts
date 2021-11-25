import { useState } from "react";

import Fee from "./Fee";
import Artwork from "./Artwork";
import TimedAuction from "./TimedAuction";
import FixedPrice from "./FixedPrice";

import DollarIcon from "assets/dollar_icon.svg";
import ClockIcon from "assets/clock_icon.svg";

const SaleForm = () => {
	const [type, setType] = useState(1);

	return (
		<div className="flex flex-col mx-10">
			<div className="text-white">
				<div className="mb-6 font-semibold text-xl">Type</div>
				<div className="flex flex-row mb-24">
					{/* Using div as button with onClick handler for flex grow */}
					<div
						className="flex flex-col flex-grow h-32 text-center border-2 border-gray-300 rounded-lg py-4 mx-4"
						onClick={() => setType(type === 1 ? 2 : 1)}>
						<img src={DollarIcon} />
						<div>Fixed Price</div>
					</div>
					<div
						className="flex flex-col flex-grow h-32 text-center border-2 border-gray-300 rounded-lg py-4 mx-4"
						onClick={() => setType(type === 2 ? 1 : 2)}>
						<img src={ClockIcon} style={{ height: "75.3594px" }} />
						<div>Timed Auction</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row flex-grow divide-x-2 divide-gray-400">
				{type === 1 && <FixedPrice />}
				{type === 2 && <TimedAuction />}
				<Artwork />
			</div>
			<Fee />
		</div>
	);
};

export default SaleForm;
