import logoLight from "assets/logo_light.png";
import PrimaryButton from "components/Buttons/Primary";
import SecondaryButton from "components/Buttons/Secondary";
import HeartIcon from "assets/heart_icon.svg";
import { useEffect } from "react";
import { useState } from "react";
import { utils } from "ethers";
import { oneToUSD } from "utils/currency";


const Banner = ({ nftDetail = {} }) => {
	const { image, tokenId = "", currentOwner, currentSellOrder, currentAuction } = nftDetail || {};
	const { address: ownerAddress = "None" } = currentOwner || {};
	const { endsAt, highestBid = 0, highestBidder = "None" } = currentAuction || {}
	const { price = 0 } = currentSellOrder || {}
	const highestBidValue = utils.formatEther(highestBid)
	const priceValue = utils.formatEther(price);
	const [timeLeft, setTimeLeft] = useState(new Date(0));
	const [owner, setOwner] = useState(false)
	const calculateTimeLeft = (endTime) => {
		let currDate = Date.now();
		const actualDate = new Date(parseInt(endTime) * 1000);

		setTimeLeft(new Date(actualDate - currDate))
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			if (endsAt) {
				calculateTimeLeft(endsAt);
			}
		}, 1000);

	});

	const ButtonLayout = () => {
		if (owner) {
			if (currentAuction) {
				return (<div className="flex">
					<PrimaryButton className="my-4 mr-4">Accept Bid</PrimaryButton>
				</div>);
			}
			else if (currentSellOrder) {
				return (<div className="flex">
					<PrimaryButton className="my-4 mr-4">Cancel Sale</PrimaryButton>
				</div>);
			}
			else {
				return (<div>Sell</div>)
			}
		}
		else {
			if (currentAuction) {
				return (<div className="flex">
					<PrimaryButton className="my-4 mr-4">Place Bid</PrimaryButton>
				</div>);
			}
			else if (currentSellOrder) {
				return (<div className="flex">
					<PrimaryButton className="my-4 mr-4">Buy Now</PrimaryButton>
				</div>);
			}
			else {
				return (<div className="mt-8 font-bold">Not Listed on marketplace</div>)
			}
		}

	}
	const MainCard = () => {
		return (
			<div className=" h-60v w-40v p-2  rounded-lg">
				<div className=" p-4 blur-glass h-60v mt-8 w-35v">
					<img
						src={image}
						className="w-full bg-gray-200 rounded-md h-full bg-cover"
					/>
					<div className="absolute bg-white right-8 top-8 rounded-md">
						<div className="flex text-main-default p-4">
							<img src={HeartIcon} className=" h-6 w-6 mr-2" />
							16
						</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<>
			<div className="flex container px-4 mx-auto text-white items-start justify-between pt-8 pb-16">
				<MainCard />
				<div className="flex flex-col items-start ml-32">
					<div className="inline-block font-bold text-5xl">Harmoonie #{tokenId}</div>
					<div>
						Owned by{" "}
						<u>
							<b>@{ownerAddress}</b>
						</u>
					</div>
					<b className="mt-8">Description</b>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
					{currentAuction && <>
						<b className="mt-8">Sale Ends on {(new Date(endsAt * 1000)).toString()}</b>
						<div className="flex flex-grow gap-8 mt-8 justify-between">
							<div className="">
								<div className="font-bold text-3xl mb-2">{timeLeft.getHours()}</div>
								<div className=" text-sm">Hour{timeLeft.getHours() == 1 ? "" : "s"}</div>
							</div>
							<div>
								<div className="font-bold text-3xl mb-2">{timeLeft.getMinutes()}</div>
								<div className=" text-sm">Minute{timeLeft.getMinutes() == 1 ? "" : "s"}</div>
							</div>
							<div>
								<div className="font-bold text-3xl mb-2">{timeLeft.getSeconds()}</div>
								<div className=" text-sm">Second{timeLeft.getSeconds() == 1 ? "" : "s"}</div>
							</div>
						</div>
						<div className="font-bold text-sm mt-8 mb-4">Current bid</div>
						<div className="flex items-center ">
							<div className="font-bold text-4xl mb-2 mr-4">{highestBidValue} ONE</div>
							<div className=" text-sm">${oneToUSD(highestBidValue)}</div>
						</div>
					</>}
					{currentSellOrder &&
						<div className="flex items-center ">
							<div className="font-bold text-4xl mb-2 mr-4">{priceValue} ONE</div>
							<div className=" text-sm">${oneToUSD(priceValue)}</div>
						</div>
					}
					<ButtonLayout />
				</div>

				<div></div>
			</div>
		</>
	);
};

export default Banner;
