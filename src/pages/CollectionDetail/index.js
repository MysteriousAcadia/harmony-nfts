import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Banner from "./Banner";
import Details from "./Details";
import ExploreMore from "./ExploreMore";
import Offers from "./Offers";
import graphQlInstance from "config/axios";

const CollectionDetail = ({ }) => {
  const { id } = useParams();
  const [nftDetail, setNftDetail] = useState({});
  const [bids, setBids] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [auctionData, setAuctionData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nft(id:"${id}") {
    id
    tokenId
    token
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
  }
}

`,
      });
      console.log(result.data);
      setNftDetail(result.data?.data?.nft);
    };
    fetchData();

    const fetchAutcionData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  {
	nft(id:${id}){
    currentAuction {
      id
      bids(orderBy:value, orderDirection:desc){
        value
        timestamp
        id
        bidder{
          id
        }
      }
    }
  }
}


`,
      });
      console.log(result.data);
      setAuctionData(result.data?.data?.nft?.currentAuction);
    };
    const fetchOrderHistoryData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  {
	nft(id:${id}){
    currentAuction {
      id
      bids(orderBy:value, orderDirection:desc){
        value
        timestamp
        id
        bidder{
          id
        }
      }
    }
  }
}


`,
      });
      console.log(result.data);
      setOrderHistory(result.data?.data?.nft?.sales);
    };
    fetchAutcionData();
    fetchData();
  }, [id]);
  return (
    <>
      <Banner nftDetail={nftDetail} />
      <Details nftDetail={nftDetail} />
      <Offers nftDetail={nftDetail} auctionData={auctionData} orderHistory={orderHistory} />
      <ExploreMore />
    </>
  );
};
export default CollectionDetail;
