import { Disclosure } from "@headlessui/react";
//Assets
import DiscordIcon from "assets/discord_icon.svg";
import WebIcon from "assets/web_icon.svg";
import StatsIcon from "assets/stats_icon.svg";
import TwitterIcon from "assets/twitter_icon.svg";

const AttrCard = ({ data = {} }) => {
	const { key, value } = data;
	return (
		<>
			<div className="glass-2 p-4 text-center">
				<div className="text-sm uppercase font-bold mb-2">{key}</div>
				<div className=" font-extrabold mb-2">{value}</div>
				<div className=" font-normal mb-2">12% have this trait</div>
			</div>
		</>
	);
};
const Details = ({ nftDetail = {} }) => {
	const { attributes = [], tokenId, market = {}, id } = nftDetail || {};
	const { id: marketId } = market;

	return (
		<>
			<div className="container px-4 mx-auto">
				<div className="flex justify-around text-white">
					<div className="flex-1 mr-8">
						<Disclosure
							defaultOpen={true}
							as="div"
							className="w-full mt-6 bg-transparent border border-gray-400 rounded-md">
							{({ open }) => (
								<>
									<div>
										<Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
											<span className="font-bold flex-grow w-full">
												Details
											</span>
											<span className="ml-6 h-7 flex items-center">+</span>
										</Disclosure.Button>
									</div>
									<Disclosure.Panel
										as="div"
										className="mt-2 p-6 border-t border-gray-400 pr-12">
										<p className="truncate mb-2">
											<b>Token ID: </b> {id} <br />
										</p>
										<p className="truncate mb-2">
											<b>Contract Address: </b> {marketId} <br />
										</p>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<Disclosure
							defaultOpen={true}
							as="div"
							className=" mt-6 bg-transparent border border-gray-400 rounded-md">
							{({ open }) => (
								<>
									<div>
										<Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
											<span className="font-bold">About Harmoonies</span>
											<span className="ml-6 h-7 flex items-center">+</span>
										</Disclosure.Button>
									</div>
									<Disclosure.Panel
										as="div"
										className="mt-2 p-6 border-t border-gray-400 pr-12">
										<p className="inline-block ">
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Duis aute
											irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. e velit esse
											cillum dolore eu fugiat nulla pariatur. Duis aute irure
											dolor.
										</p>
										<div className=" mt-4 mb-4 flex ">
											<img src={WebIcon} className="m-2" />
											<img src={StatsIcon} className="m-2" />
											<img src={DiscordIcon} className="m-2" />
											<img src={TwitterIcon} className="m-2" />
										</div>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
					<div className="flex-1">
						<Disclosure
							defaultOpen={true}
							as="div"
							className=" mt-6 bg-transparent border border-gray-400 rounded-md">
							{({ open }) => (
								<>
									<div>
										<Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
											<span className="font-bold">Details</span>
											<span className="ml-6 h-7 flex items-center">+</span>
										</Disclosure.Button>
									</div>
									<Disclosure.Panel
										as="div"
										className="mt-2 p-6 border-t border-gray-400 ">
										<div className="grid grid-cols-3 gap-4">
											{attributes.map(e => {
												console.log(e);
												return <AttrCard data={e} />;
											})}
										</div>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
