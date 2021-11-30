import { useEffect } from "react";
import graphQlInstance from "config/axios";
import { useState } from "react";
import { utils } from "ethers";
import { oneToUSD } from "utils/currency";

const StatsCard = ({ value, title }) => {
	return (
		<div className="glass-2 px-8 py-8 flex flex-col items-center text-white">
			<div className="text-4xl font-bold overflow-hidden truncate">{value}</div>
			<div className="text-xl mt-2  truncate">{title}</div>
		</div>
	);
};

const StatsRow = ({ data = {}, index }) => {
	const {
		nft = {},
		name,
		currencyStats,
		totalNfts,
		totalSales,
		price = 0,
		timestamp = 0,
		buyer = {},
		seller = {},
	} = data;
	const currenctyStat = (currencyStats || [{ floor: 0, volume: 0 }])[0];
	const { tokenId, image } = nft;
	const floor = utils.formatEther(currenctyStat.floor);
	const volume = utils.formatEther(currenctyStat.volume);
	const { address: buyerAddress } = buyer;
	const { address: sellerAddress } = seller;
	return (
		<tr className="border-b border-gray-200">
			<td className="items-center py-4">#{index + 1}</td>
			<td className="items-center ">
				<div className="flex m-4 items-center">
					<img
						src={image}
						className="glass-2-no-shadow p-1 w-14 h-14 object-cover mr-3"
					/>
					<div className="font-bold text-md">{name}</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex m-4 justify-around items-center">
					<div className=" truncate  font-semibold text-lg">
						{parseFloat(floor).toFixed(3)} ONE
						<div className="font-medium">${oneToUSD(floor)}</div>
					</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="flex m-4 justify-around items-center">
					<div className="w-32 truncate underline font-semibold text-lg">
						Not Available
					</div>
				</div>
			</td>
			<td className="items-center font-bold truncate">
				<div className="m-4 flex flex-col">
					<div>{parseFloat(volume).toFixed(3)} ONE</div>
					<div className="font-medium">${oneToUSD(volume)}</div>
				</div>
			</td>
			<td className="items-center truncate">
				<div className="m-4 flex flex-col">-</div>
			</td>
			<td className="items-center truncate">
				<div className="m-4 flex flex-col">-</div>
			</td>
			<td className="items-center truncate">
				<div className="flex flex-row mr-4">{totalNfts}</div>
			</td>
			<td className="items-center truncate">
				<div className="flex flex-row mr-4">{totalSales}</div>
			</td>
		</tr>
	);
};

const Stats = ({ }) => {
	const stats = [
		{
			value: "Global Market Cap",
			title: "Items",
		},
		{
			value: "7 Day Volume",
			title: "Owners",
		},
		{
			value: `ONE Price`,
			title: "Volume Traded",
		},
	];
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await graphQlInstance.post("/graphql", {
				query: `{
  markets{
    id
    token
    name
    fee
    totalNfts
    totalSales
    reflectionFee
    currencyStats{
      floor
      volume
      fees
      reflectionFees
      currency{
        address
      }

    }
  }
}
`,
			});
			console.log(result.data);
			setCollections(result.data?.data?.markets);
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="container px-4 mx-auto mt-4 text-white text-center">
				<div className="text-3xl mb-8 font-semibold">Statistics</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
					{stats.map(element => (
						<StatsCard {...element} />
					))}
				</div>{" "}
				<table className="table-auto mt-16 w-full">
					<thead className="font-bold  text-center border-b border-gray-200 pb-4 mb-4">
						<tr className="pb-4">
							<th className="py-4">#</th>
							<th>Collection</th>
							<th>Floor Price</th>
							<th>Average Price 24h</th>
							<th>Total Volume</th>
							<th>7d %</th>
							<th>24h %</th>
							<th>Owners</th>
							<th>Items</th>
						</tr>
					</thead>
					<tbody className="text-center divide-y gap-4 gap-y-4">
						{collections.map((e, i) => {
							return <StatsRow index={i} data={e} />;
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};
export default Stats;
