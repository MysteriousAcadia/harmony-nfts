import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DarkDropdownWithIcon from "components/Dropdowns/DarkDropdown/icon";
import SaleIcon from "assets/sale_icon.svg";
import LinkIconDark from "assets/copy_link_icon.svg";
import SalePic from "assets/sale_pic.svg";
import CloseIcon from "assets/close_icon.svg";

const TableRow = () => {
	return (
		<tr>
			<td className="items-center truncate">
				<div className="flex m-4 items-center">
					<img src={SaleIcon} className="mr-9" />
					<img src={SalePic} className="mr-3" />
					<div className="font-bold text-lg">Harmoonie#129</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex m-4 justify-around items-center">
					<div className="w-32 truncate underline font-semibold text-lg">
						Arielle563
					</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex m-4 justify-around items-center">
					<div className="w-32 truncate underline font-semibold text-lg">
						Vulto
					</div>
				</div>
			</td>
			<td className="items-center font-bold truncate">
				<div className="m-4 flex flex-col">
					<div>500 ONE</div>
					<div className="font-medium">$30.33</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="m-4 flex flex-col">
					<div className="font-normal">11/7/2021</div>
					<div className="font-normal">10:06am</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex flex-row">
					<div className="truncate underline mr-1">71ghWq3xK...</div>
					<img src={LinkIconDark} />
				</div>
			</td>
		</tr>
	);
};

const SaleHistory = () => {
	const [open, setOpen] = useState(true);

	const historyOptions = [
		"Last 7 days",
		"Last 14 days",
		"Last 30 days",
		"Last 90 days",
		"Last year",
		"All time",
	];

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="text-main-default fixed z-10 inset-0 overflow-y-auto"
				onClose={setOpen}>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<Dialog.Overlay
							className="fixed inset-0"
							style={{ background: "rgba(0, 0, 0, 0.7)" }}
						/>
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden sm:inline-block sm:align-middle sm:h-screen"
						aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
						<div className="inline-block align-bottom glass-3 mx-8 px-32 pt-16 pb-8 w-80v text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
							<div className="flex flex-row justify-between">
								<div></div>
								<div className="text-2xl font-bold mb-16">
									Harmoonies Sale History
								</div>
								<div>
									<button onClick={() => setOpen(!open)}>
										<img src={CloseIcon} />
									</button>
								</div>
							</div>

							<div className="flex flex-row space-x-8 text-lg">
								<DarkDropdownWithIcon
									options={historyOptions}
									className="w-32"
								/>

								<div className="flex flex-col text-left">
									<div>14 Day Average Price</div>
									<div className="font-semibold">800 ONE</div>
								</div>

								<div className="flex flex-col text-left">
									<div>14 Day Volume</div>
									<div className="font-semibold">47382 ONE</div>
								</div>
							</div>
							<div className="my-8 rounded-md py-4">
								<table className="table-auto w-full border-collapse border border-gray-300">
									<thead className="font-bold text-center h-16">
										<tr>
											<th className="border-b-2 border-gray-300">Item</th>
											<th className="border-b-2 border-gray-300">From</th>
											<th className="border-b-2 border-gray-300">To</th>
											<th className="border-b-2 border-gray-300">Price</th>
											<th className="border-b-2 border-gray-300">Timestamp</th>
											<th className="border-b-2 border-gray-300">
												Transaction
											</th>
										</tr>
									</thead>
									<tbody className="text-center divide-y gap-4 gap-y-4">
										<TableRow />
										<TableRow />
										<TableRow />
										<TableRow />
										<TableRow />
										<TableRow />
										<TableRow />
									</tbody>
								</table>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default SaleHistory;
