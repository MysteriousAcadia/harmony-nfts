import PrimaryWhite from "components/Buttons/PrimaryWhite";
import graphQlInstance from "config/axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { sell, createAuction } from "web3Integration";
import Banner from "./Banner";
import SaleForm from "./SaleForm";
import { utils } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom"

const ListForSale = ({ }) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [nftDetail, setNftDetail] = useState({});
	const { activate, account, library } = useWeb3React();
	const [signer, setSigner] = useState();

	const [sellData, setSellData] = useState({ type: "sell", price: "", time: "" });
	const updateData = (field, value) => {
		let newSellData = { ...sellData };
		newSellData[field] = value;
		setSellData(newSellData);
	}
	useEffect(async () => {
		if (!library) return;
		const data =
			library?.messenger?.chainType === "hmy"
				? library.provider
				: await library.getSigner(account);
		setSigner(data);

	}, [library, nftDetail]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await graphQlInstance.post("/graphql", {
				query: `{
  nft(id:"${id}"){
    id
    token
    tokenId
    image
    market{
      id
      currencyStats{
        floor
      }
    }
    currencyStats {
      id
      nft {
        id
      }
      currency {
        id
      }
      volume
      fees
      reflectionFees
    }
    attributes {
      key
      value
    }
    currentOwner{
      id
      address
    }
    currentSellOrder{
      price
      seller{
        address
        id
      }
      timestamp
    }
    currentAuction{
      seller{
        id
        address
      }
      endsAt
      highestBid
      highestBidder


    }
  }
}
`,
			});
			console.log(result.data);
			setNftDetail(result.data?.data?.nft);
		};
		fetchData();
	}, [id]);
	return (
		<>
			<div className="container px-4 mx-auto">
				<Banner />
				<SaleForm nftDetail={nftDetail} data={sellData} onChange={updateData} />
				<div className="flex flex-row justify-center align-middle py-16">
					<PrimaryWhite
						onClick={async () => {
							if (sellData.type === "sell") {
								await sell(signer, nftDetail?.token, nftDetail?.tokenId, utils.parseEther(sellData.price))
							}
							else if (sellData.type === "auction") {
								await createAuction(signer, nftDetail?.token, nftDetail?.tokenId, utils.parseEther(sellData.price), sellData?.duration?.value);
							}
							else {
								return;
							}
							navigate("/collections")

						}}
						className="px-8">Complete Listing</PrimaryWhite>
				</div>
			</div>
		</>
	);
};
export default ListForSale;
