import DollarIcon from "assets/dollar_icon.svg";
import ClockIcon from "assets/clock_icon.svg";
import ListingPic from "assets/listing_pic.svg";
import ONEInput from "components/Inputs/ONEInput/index";
import ONEInputLight from "components/Inputs/ONEInput/light";
import LightDropdown from "components/Dropdowns/LightDropdown/index";

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

			<div className="flex flex-row divide-x-2 divide-gray-400">
				<div className="flex flex-col justify-start pr-32 w-max">
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

					<div className="mb-10 text-white">
						<div className="mb-4 font-semibold text-xl">Duration</div>
						<LightDropdown options={durationOptions} className="w-32" />
					</div>

					<div className="mb-10">
						<div className="flex flex-row">
							<div className="mb-4 font-semibold text-xl text-white">
								Include Reserve Price
							</div>
							<div className="relative inline-block w-10 mr-2 align-middle select-none">
								<input
									type="checkbox"
									name="toggle"
									id="Green"
									className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
								/>
								<label
									for="toggle"
									className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
							</div>
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
		</div>
	);
};

export default SaleForm;
