import graphQlInstance from "config/axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Cards from "./Cards";
import Cover from "./Cover";
import Filters from "./Filters";
import SaleHistory from "./SaleHistory";

const CollectionView = () => {
	const { marketId } = useParams();
	const [collectionDetail, setCollectionDetail] = useState();
	const [nfts, setNfts] = useState();
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await graphQlInstance.post("/graphql", {
				query: `{
  market(id:"${marketId}"){
    active
    name
    id
    token
    fee
    reflectionFee
    totalAuctions
    totalSellOrders
    totalSales
    totalNfts
    currencyStats{
      floor
      volume
      fees
    }
    attributes{
      key
      values
    }
  }
}

`,
			});
			console.log(result.data);
			setCollectionDetail(result.data?.data?.market);
		};

		const fetchNFTs = async () => {
			const result = await graphQlInstance.post("/graphql", {
				query: `{
  nfts(where:{market:"0x3c8a8a7b7d0fea5078fb37c69e42b85d8fc6a063"}){
  token
    id
    tokenId
    image
     currentAuction{
      highestBid
      endsAt
      seller{
        id
        address
      }
    }
    currentSellOrder{
      id
      seller {
        id
        address
      }
      price

    }
  }
}

`,
			});
			console.log(result.data);
			setNfts(result.data?.data?.nfts);
		};
		fetchNFTs();
		fetchData();
	}, [marketId]);

	const [historyOpen, setHistoryOpen] = useState(false);

	const openHistory = () => setHistoryOpen(true);

	return (
		<>
			<div className="container px-4 mx-auto">
				{historyOpen && <SaleHistory />}
				<Cover collectionDetail={collectionDetail} openHistory={openHistory} />
				<Filters collectionDetail={collectionDetail} />
				<Cards nfts={nfts} />
			</div>
		</>
	);
};
export default CollectionView;
