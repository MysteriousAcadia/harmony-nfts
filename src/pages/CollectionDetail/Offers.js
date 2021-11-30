import { Disclosure } from "@headlessui/react";

import TransferIcon from "assets/transactions/transfer_icon.svg";
import LinkIcon from "assets/link_icon.svg";
import CopyIcon from "assets/copy_icon.svg";
import "./style.css";
import LineTab from "components/Tabs/LineTab/index";
import DiscloseTab from "components/Tabs/DiscloseTab/index";
import { utils } from "ethers";
import { floorDifference, oneToUSD } from "utils/currency";
import { formatDate } from "utils/date";



const Offers = ({ nftDetail, auctionData, orderHistory }) => {
	const { market = {} } = nftDetail || {};
	const floor = utils.formatEther((market?.currencyStats || [{ floor: 0 }])[0]?.floor || "1");
	const AuctionRow = ({ data = {} }) => {
		const price = parseFloat(utils.formatEther(data?.value || "0"))
		const { bidder = {}, timestamp, } = data;
		const { id: bidderId } = bidder;
		return (
			<tr>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around items-center font-bold">
						{price.toFixed(3) + " ONE" || "Not Available"}
					</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around font-normal  items-center">
						{`$${oneToUSD(price || 0)}`}
					</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around items-center">
						{" "}
						{floorDifference(floor, price)}
					</div>
				</td>

				<td className=" items-center  truncate">
					<div className="m-4">{formatDate(timestamp)}</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around items-center">
						<div className="flex items-center">
							<div className="w-48 truncate">
								{bidderId}
							</div>
							<img src={LinkIcon} className="ml-2" />
						</div>
					</div>
				</td>
			</tr>
		);
	};

	const SaleRow = ({ data }) => {
		const price = parseFloat(utils.formatEther(data?.price || "0"))
		const { buyer = {}, seller = {}, timestamp } = data;
		const { id: buyerId } = buyer;
		const { id: sellerId } = seller;
		return (
			<tr>
				<td className=" items-center truncate">
					<div className="flex m-4 items-center">
						<img src={TransferIcon} className="mr-2" /> Transfer
					</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around  items-center">
						{" "}
						<div className="w-32 truncate">
							{buyerId}
						</div>
						<img src={CopyIcon} className="ml-2" />
					</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around items-center">
						{" "}
						<div className="w-32 truncate">
							{sellerId}
						</div>
						<img src={CopyIcon} className="ml-2" />
					</div>
				</td>
				<td className=" items-center font-bold truncate">
					<div className="m-4"> {price} ONE</div>
				</td>
				<td className=" items-center  truncate">
					<div className="m-4">{formatDate(timestamp)}</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around items-center">
						{" "}
						<div className="w-32 truncate">
							"Not Avaliable"
						</div>
						<img src={LinkIcon} className="ml-2" />
					</div>
				</td>
			</tr>
		);
	};
	return (
		<>
			<div className="container text-white px-4 mx-auto">
				<div>
					<DiscloseTab
						tabs={["Offers/Bids", "Order History"]}>
						{!auctionData ? "Nothing to show." :
							<table className="display-block md:table-auto w-full overflow-x-scroll">
								<thead className="font-bold text-center">
									<tr>
										<th>Price(ONE)</th>
										<th>Price(USD)</th>
										<th>Floor Difference</th>
										<th>Expiration</th>
										<th>From</th>
									</tr>
								</thead>
								<tbody className="text-center divide-y gap-4 gap-y-4">
									{auctionData.map(e => {
										return (<AuctionRow data={e} />)
									})}

								</tbody>
							</table>
						}
						{!orderHistory ? "Nothing to show." :
							<table className="display-block md:table-auto w-full overflow-x-scroll">
								<thead className="font-bold text-center">
									<tr>
										<th>Event</th>
										<th>From</th>
										<th>To</th>
										<th>Price</th>
										<th>Timestamp</th>
										<th>Transaction</th>
									</tr>
								</thead>
								<tbody className="text-center divide-y gap-4 gap-y-4">
									{orderHistory.map(e => {
										return (<SaleRow data={e} />)
									})}

								</tbody>
							</table>
						}

					</DiscloseTab>
					{/* <Disclosure
						defaultOpen={true}
						as="div"
						className=" mt-6 bg-transparent border border-gray-400 rounded-md">
						{({ open }) => (
							<>
								<div>
									<Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
										<div className="font-bold flex">
											<button>Offers</button>
											<button>Order History</button>
										</div>
										<span className="ml-6 h-7 flex items-center">+</span>
									</Disclosure.Button>
								</div>
								<Disclosure.Panel
									as="div"
									className="mt-2 p-6 border-t text-white border-gray-400 ">
									<table className="table-auto w-full">
										<thead className="font-bold text-center">
											<tr>
												<th>Event</th>
												<th>From</th>
												<th>To</th>
												<th>Price</th>
												<th>Timestamp</th>
												<th>Transaction</th>
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
								</Disclosure.Panel>
							</>
						)}
					</Disclosure> */}
				</div>
			</div>
		</>
	);
};
export default Offers;
