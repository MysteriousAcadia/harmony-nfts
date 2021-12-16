import { useState, useEffect } from "react";
import { useParams } from "react-router";
import graphQlInstance from "config/axios";

import Banner from "./Banner";
import Details from "./Details";
import ExploreMore from "./ExploreMore";
import Offers from "./Offers";
import axios from "axios/index";
import { getNFTUri } from "web3Integration";
import { useWeb3React } from "@web3-react/core";


const CollectionDetail = ({ }) => {
  const { marketId, id } = useParams();
  const [nftDetail, setNftDetail] = useState({});
  const [bids, setBids] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [auctionData, setAuctionData] = useState([]);
  const { activate, account, library } = useWeb3React();
  const [metaData, setMetaData] = useState({});

  useEffect(async () => {
    const data =
      await library?.getSigner();
    console.log(library);
    const res = (await getNFTUri(library, marketId, id))
    setMetaData(res?.data);
    console.log("werew")
  }, [library, marketId, id]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nft(id:"${marketId}-${id}"){
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
      ended
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
  nft(id:"${marketId}-${id}") {
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
  nft(id:"${marketId}-${id}") {
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
  }, [marketId, id]);
  return (
    <>
      <Banner metaData={metaData} nftDetail={nftDetail} />
      <Details metaData={metaData} nftDetail={nftDetail} />
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
