import { useState, useEffect } from "react";
import { useParams } from "react-router";
import graphQlInstance from "config/axios";

import Banner from "./Banner";
import Details from "./Details";
import ExploreMore from "./ExploreMore";
import Offers from "./Offers";

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
  nft(id:"${id}"){
    id
    token
    tokenId
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

    const fetchAutcionData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nft(id:"${id}") {
    currentAuction{
      id
      bids{
        id
        timestamp
        value
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
      setAuctionData(result.data?.data?.nft?.currentAuction?.bids);
    };
    const fetchOrderHistoryData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nft(id:"${id}") {
    sales{
      id
      buyer{
        id
      }
      seller{
        id
      }
      price
      timestamp
      __typename
    }
  }
}


`,
      });
      console.log(result.data);
      setOrderHistory(result.data?.data?.nft?.sales);
    };
    fetchAutcionData();
    fetchOrderHistoryData();
    fetchData();
  }, [id]);
  return (
    <>
      <Banner nftDetail={nftDetail} />
      <Details nftDetail={nftDetail} />
      <Offers
        nftDetail={nftDetail}
        auctionData={auctionData}
        orderHistory={orderHistory}
      />
      <ExploreMore />
    </>
  );
};
export default CollectionDetail;
