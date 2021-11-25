import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { utils } from "ethers";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianAxis,
	Tooltip,
} from "recharts";

import graphQlInstance from "config/axios";
import { oneToUSD } from "utils/currency";
import { formatDate, formatTime } from "utils/date";
import DarkDropdownWithIcon from "components/Dropdowns/DarkDropdown/icon";

import SaleIcon from "assets/sale_icon.svg";
import LinkIconDark from "assets/copy_link_icon.svg";
import CloseIcon from "assets/close_icon.svg";
import "./style.css";

const SaleRow = ({ data = {} }) => {
	const { nft = {}, price = 0, timestamp = 0, buyer = {}, seller = {} } = data;
	const { tokenId, image } = nft;
	const value = utils.formatEther(price);
	const { address: buyerAddress } = buyer;
	const { address: sellerAddress } = seller;
	return (
		<tr>
			<td className="items-center">
				<img src={SaleIcon} className="ml-4" />
			</td>
			<td className="items-center">
				<div className="flex m-4 items-center">
					<img
						src={image}
						className="glass-2-no-shadow w-14 h-14 object-cover mr-3 rounded-md border-2 border-gray-100"
					/>
					<div className="font-bold text-md">Harmoonie #{tokenId}</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex m-4 justify-around items-center">
					<div className="w-32 truncate underline font-semibold text-lg">
						{sellerAddress}
					</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex m-4 justify-around items-center">
					<div className="w-32 truncate underline font-semibold text-lg">
						{buyerAddress}
					</div>
				</div>
			</td>
			<td className="items-center font-bold truncate">
				<div className="m-4 flex flex-col">
					<div>{parseFloat(value).toFixed(3)} ONE</div>
					<div className="font-medium">${oneToUSD(value)}</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="m-4 flex flex-col">
					<div className="font-normal">{formatDate(timestamp)}</div>
					<div className="font-normal">{formatTime(timestamp)}</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex flex-row mr-4">
					<div className="truncate underline mr-1">Not Available</div>
					<img src={LinkIconDark} />
				</div>
			</td>
		</tr>
	);
};

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-main-default p-4 rounded-lg text-white">
				<p className="label">{`Sales: `}</p>
				<p className="label">{`Avg Price: `}</p>
				<p className="label">{`Volume: `}</p>
			</div>
		);
	}

	return null;
};

const SaleHistory = ({ historyOpen, setHistoryOpen }) => {
	const [saleData, setSaleData] = useState();
	const [selectedTime, setSelectedTime] = useState(0);
	const [chartData, setChartData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await graphQlInstance.post("/graphql", {
				query: `{
sales(where:{timestamp_gt:${selectedTime}}, orderBy:timestamp, orderDirection:desc){
  nft{
    id
    image
    tokenId
  }
  seller{
    id
    address
  }
  buyer{
    id
    address
  }
  price
  timestamp
}
}

`,
			});

			console.log(result.data);
			setSaleData(result.data?.data?.sales);
			setChartData(
				result.data?.data?.sales?.map(e => ({
					timestamp: formatDate(e.timestamp),
					value: parseFloat(utils.formatEther(e.price || 0)),
				}))
			);
		};
		fetchData();
	}, [selectedTime]);

	const historyOptions = [
		"Last 7 days",
		"Last 14 days",
		"Last 30 days",
		"Last 90 days",
		"Last year",
		"All time",
	];
	console.log(chartData);

	return (
		<Transition.Root show={historyOpen} as={Fragment}>
			<Dialog
				as="div"
				className="text-main-default fixed z-10 inset-0 overflow-y-auto"
				onClose={() => setHistoryOpen(false)}>
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
						<div className="inline-block align-bottom glass-3 mx-8 px-24 pt-16 pb-8 w-80v text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
							<div className="flex flex-row justify-between">
								<div></div>
								<div className="md:text-xl lg:text-2xl font-bold mb-16">
									Harmoonies Sale History
								</div>
								<div>
									<button onClick={() => setHistoryOpen(false)}>
										<img src={CloseIcon} />
									</button>
								</div>
							</div>

							<div className="flex flex-row space-x-8 text-lg">
								<DarkDropdownWithIcon
									options={historyOptions}
									className="w-48"
									onChange={newOption => {
										console.log(newOption);
										const time = parseInt(Date.now() / 1000);
										const day = 60 * 60 * 24;

										switch (newOption) {
											case historyOptions[0]:
												setSelectedTime(time - 7 * day);
												break;
											case historyOptions[1]:
												setSelectedTime(time - 14 * day);
												break;
											case historyOptions[2]:
												setSelectedTime(time - 30 * day);
												break;
											case historyOptions[3]:
												setSelectedTime(time - 90 * day);
												break;
											case historyOptions[4]:
												setSelectedTime(time - 365 * day);
												break;

											default:
												console.log(newOption);
												console.log("ew");
												setSelectedTime(0);
												break;
										}
										return;
									}}
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

							<div className="text-white my-8 py-8 border-2 border-gray-300 rounded-lg">
								<div className="mx-auto">
									<LineChart
										width={800}
										height={300}
										data={chartData}
										margin={{
											top: 5,
											right: 30,
											left: 20,
											bottom: 5,
										}}>
										<XAxis
											dataKey="timestamp"
											padding={{ left: 20 }}
											tickLine={false}
											axisLine={false}
											stroke="rgb(17, 92, 112)"
											style={{
												fontSize: "1.1rem",
												fontWeight: "600",
											}}
										/>
										<YAxis
											dataKey="value"
											tickLine={false}
											axisLine={false}
											stroke="rgb(17, 92, 112)"
											padding={{ bottom: 20 }}
											style={{
												fontSize: "1.1rem",
												fontWeight: "600",
											}}
										/>
										{/* tick={{ fontSize: "1.1rem", fontWeight: "semibold" }} */}
										<Tooltip content={<CustomTooltip />} />
										<Line
											type="monotone"
											dataKey="value"
											stroke="rgb(17, 92, 112)"
											strokeWidth={2}
										/>
									</LineChart>
								</div>
							</div>

							<div className="my-8 rounded-lg fixed-header py-4 overflow-auto">
								<table className="table-auto w-full border-collapse border rounded-lg border-gray-300">
									<thead className="font-bold text-center h-16 px-4">
										<tr>
											<th className="border-b-2 border-gray-300"></th>
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
									<tbody className="text-center px-8 overflow-y-scroll divide-y gap-4 gap-y-4">
										{saleData
											? saleData.map(e => <SaleRow data={e} />)
											: "No Data to show."}
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
