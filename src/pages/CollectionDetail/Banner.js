import logoLight from "assets/logo_light.png";
import PrimaryButton from "components/Buttons/Primary";
import SecondaryButton from "components/Buttons/Secondary";
import HeartIcon from "assets/heart_icon.svg";
import { useEffect } from "react";
import { useState } from "react";
import { utils } from "ethers";
import { oneToUSD } from "utils/currency";
import { bid, buy, cancelSell, endAuction, getNftOwner } from "web3Integration";
import CheckoutModal from "components/Modals/MakeOffer/CheckoutModal";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import BidModal from "components/Modals/MakeOffer/BidModal";
import { store } from "react-notifications-component"


const Banner = ({ nftDetail = {}, metaData = {} }) => {
	const navigate = useNavigate();
	const { activate, account, library } = useWeb3React();
	const {
		name,
		image,
		description,
	} = metaData;
	const {
		token,
		tokenId = "",
		currentOwner,
		currentSellOrder,
		currentAuction,
	} = nftDetail || {};
	useEffect(async () => {
		if (!library) return;
		const data =
			library?.messenger?.chainType === "hmy"
				? library.provider
				: await library.getSigner(account);
		const owner = await getNftOwner(data, token, tokenId);
		if (account == owner) {
			setOwner(true);
		}
		console.log(library);
	}, [library, token, tokenId]);


	const { address: ownerAddress = "None" } = currentOwner || {};
	const {
		endsAt,
		ended = false,
		highestBid = 0,
		highestBidder = "None",
		seller: auctionSeller = {}
	} = currentAuction || {};
	const { price = 0, seller = {} } = currentSellOrder || {};
	const { address: sellerAddress = "" } = seller
	const { address: auctionAddress = "" } = auctionSeller;
	const highestBidValue = utils.formatEther(highestBid);
	const priceValue = utils.formatEther(price);
	const [timeLeft, setTimeLeft] = useState(new Date(0));
	const [owner, setOwner] = useState(false);
	const [checkoutOpen, setCheckoutOpen] = useState(false);
	const [bidOpen, setBidOpen] = useState(false);
	const calculateTimeLeft = (endTime) => {
		let currDate = Date.now();
		const actualDate = new Date(parseInt(endTime) * 1000);

		setTimeLeft(new Date(actualDate - currDate));
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			if (endsAt) {
				calculateTimeLeft(endsAt);
			}
		}, 1000);
	});


	const ButtonLayout = () => {
		// console.log(sellerAddress);
		// console.log(account);
		if (owner || sellerAddress?.toUpperCase() == account?.toUpperCase() || auctionAddress?.toUpperCase() === account?.toUpperCase()) {
			if (currentAuction) {
				return (
					<div className="flex">
						<PrimaryButton
							onClick={async () => {
								if (ended) {
									await endAuction(token, tokenId)
									navigate("/collections")
								}
								else {
									store.addNotification({
										title: "Alert",
										message: "The auction hasn't ended yet!",
										type: "success",
										insert: "top",
										width: 1024,
										container: "top-center",
										animationIn: ["animate__animated", "animate__fadeIn"],
										animationOut: ["animate__animated", "animate__fadeOut"],
										dismiss: {
											duration: 600,
											showIcon: true,
										},
									});
								}

							}}
							className="my-4 mr-4">Accept Bid</PrimaryButton>
					</div>
				);
			} else if (currentSellOrder) {
				return (
					<div className="flex">
						<PrimaryButton
							onClick={async () => {
								await cancelSell(token, tokenId)
								navigate("/collections")

							}}
							className="my-4 mr-4">Cancel Sale</PrimaryButton>
					</div>
				);
			} else {
				return (<div className="flex">
					<PrimaryButton
						onClick={() => { navigate(`sale`) }}
						className="my-4 mr-4">Sell</PrimaryButton>
				</div>);
			}
		} else {
			if (currentAuction) {
				if (timeLeft > 0) {
					return (
						<div className="flex">
							<PrimaryButton
								className="my-4 mr-4"
								onClick={() => {
									setBidOpen(true);
								}}
							>
								Place Bid
							</PrimaryButton>
						</div>
					);
				}
				else {
					return <div className="mt-8 font-bold">Auction Ended.</div>;
				}
			} else if (currentSellOrder) {
				return (
					<div className="flex">
						<PrimaryButton
							onClick={() => {
								setCheckoutOpen(true);


							}}
							className="my-4 mr-4"
						>
							Buy Now
						</PrimaryButton>
					</div>
				);
			} else {
				return <div className="mt-8 font-bold">Not Listed on marketplace</div>;
			}
		}
	};
	const MainCard = () => {
		return (
			<div className="  rounded-lg">
				<div className="w-full md:max-w-md lg:max-w-lg p-4 blur-glass  mt-8">
					<img
						src={image}
						className=" bg-gray-200 rounded-md  object-cover"
					/>
					{/* <div className="absolute bg-white right-8 top-8 rounded-md">
						<div className="flex text-main-default p-4">
							<img src={HeartIcon} className=" h-6 w-6 mr-2" />
							16
						</div>
					</div> */}
				</div>
			</div>
		);
	};
	return (
		<>
			<div className="md:flex container px-4 mx-auto text-white items-start justify-between pt-8 pb-16">
				<CheckoutModal
					open={checkoutOpen}
					setOpen={setCheckoutOpen}
					onClick={async () => {
						await buy(
							nftDetail.token,
							parseInt(nftDetail.tokenId),
							parseInt(nftDetail.currentSellOrder.price),
							"0x0000000000000000000000000000000000000000"
						)
						navigate("/collections")

					}}
					price={nftDetail?.currentSellOrder?.price}
					{...nftDetail} ownerAddress={ownerAddress} />
				<BidModal
					open={bidOpen}
					setOpen={setBidOpen}
					onClick={async (bidVal) => {
						await bid(
							nftDetail.token,
							nftDetail.tokenId,
							utils.parseEther(bidVal || 0)
						)
						navigate("/collections")

					}}
					price={nftDetail?.currentAuction?.highestBid}
				/>
				<MainCard />
				<div className="flex flex-col items-start mt-8 md:ml-32">
					<div className="inline-block font-bold text-5xl">
						{name}
					</div>
					<div

					>
						{/* Owned by{" "}
						<u>
							<b>@{ownerAddress}</b>
						</u> */}
					</div>
					<b className="mt-8">Description</b>
					<div>
						{description}
					</div>
					{currentAuction && timeLeft > 0 && (
						<>
							<b className="mt-8">
								Sale Ends on {new Date(endsAt * 1000).toString()}
							</b>
							<div className="flex flex-grow gap-8 mt-8 justify-between">
								<div className="">
									<div className="font-bold text-3xl mb-2">
										{parseInt(timeLeft / 3600000)}
									</div>
									<div className=" text-sm">
										Hour{parseInt(timeLeft / 3600000) == 1 ? "" : "s"}
									</div>
								</div>
								<div>
									<div className="font-bold text-3xl mb-2">
										{timeLeft.getMinutes()}
									</div>
									<div className=" text-sm">
										Minute{timeLeft.getMinutes() == 1 ? "" : "s"}
									</div>
								</div>
								<div>
									<div className="font-bold text-3xl mb-2">
										{timeLeft.getSeconds()}
									</div>
									<div className=" text-sm">
										Second{timeLeft.getSeconds() == 1 ? "" : "s"}
									</div>
								</div>
							</div>
							<div className="font-bold text-sm mt-8 mb-4">Current bid</div>
							<div className="flex items-center ">
								<div className="font-bold text-4xl mb-2 mr-4">
									{highestBidValue} ONE
								</div>
								<div className=" text-sm">${oneToUSD(highestBidValue)}</div>
							</div>
						</>
					)}
					{currentSellOrder && (
						<div className="flex items-center ">
							<div className="font-bold text-4xl mb-2 mr-4">
								{priceValue} ONE
							</div>
							<div className=" text-sm">${oneToUSD(priceValue)}</div>
						</div>
					)}
					<ButtonLayout />
				</div>

				<div></div>
			</div>
		</>
	);
};

export default Banner;
