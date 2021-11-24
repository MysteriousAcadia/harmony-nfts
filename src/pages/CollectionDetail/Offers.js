import { Disclosure } from "@headlessui/react";

import TransferIcon from "assets/transactions/transfer_icon.svg";
import LinkIcon from "assets/link_icon.svg";
import CopyIcon from "assets/copy_icon.svg";
import "./style.css";
import LineTab from "components/Tabs/LineTab/index";
import DiscloseTab from "components/Tabs/DiscloseTab/index";
import { utils } from "ethers";
import { oneToUSD } from "utils/currency";

const TableRow = () => {
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
						a;lsdfasdfasdfasdfasdfasdfjkals;kfjas;ldfjka;lsdfjka;lsdfj
					</div>
					<img src={CopyIcon} className="ml-2" />
				</div>
			</td>
			<td className=" items-center truncate">
				<div className="flex m-4 justify-around items-center">
					{" "}
					<div className="w-32 truncate">
						a;lsdfasdfasdfasdfasdfasdfjkals;kfjas;ldfjka;lsdfjka;lsdfj
					</div>
					<img src={CopyIcon} className="ml-2" />
				</div>
			</td>
			<td className=" items-center font-bold truncate">
				<div className="m-4"> 100 ONE</div>
			</td>
			<td className=" items-center  truncate">
				<div className="m-4">10/31/2021</div>
			</td>
			<td className=" items-center truncate">
				<div className="flex m-4 justify-around items-center">
					{" "}
					<div className="w-32 truncate">
						a;lsdfasdfasdfasdfasdfasdfjkals;kfjas;ldfjka;lsdfjka;lsdfj
					</div>
					<img src={LinkIcon} className="ml-2" />
				</div>
			</td>
		</tr>
	);
};

const Offers = ({ nftDetail, auctionData, orderHistory }) => {
	const AuctionRow = ({ data = {} }) => {
		const price = parseFloat(utils.formatEther(data?.price || "0"))

		return (
			<tr>
				<td className=" items-center truncate">
					<div className="flex m-4 items-center font-bold">
						{price.toFixed(3) || "Not Available"}
					</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around  items-center">
						{oneToUSD(price || 0)}
					</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around items-center">
						{" "}
						<div className="w-32 truncate">
							a;lsdfasdfasdfasdfasdfasdfjkals;kfjas;ldfjka;lsdfjka;lsdfj
						</div>
						<img src={CopyIcon} className="ml-2" />
					</div>
				</td>
				<td className=" items-center font-bold truncate">
					<div className="m-4"> 100 ONE</div>
				</td>
				<td className=" items-center  truncate">
					<div className="m-4">10/31/2021</div>
				</td>
				<td className=" items-center truncate">
					<div className="flex m-4 justify-around items-center">
						{" "}
						<div className="w-32 truncate">
							a;lsdfasdfasdfasdfasdfasdfjkals;kfjas;ldfjka;lsdfjka;lsdfj
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
							<table className="table-auto w-full">
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
									<TableRow />
									<TableRow />
									<TableRow />
									<TableRow />
									<TableRow />
									<TableRow />
									<TableRow />
								</tbody>
							</table>
						}
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
