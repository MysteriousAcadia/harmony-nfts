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
  useEffect(() => {
    const fetchData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nft(id:"${id}") {
    id
    token
    image
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

`});
      console.log(result.data);
      setNftDetail(result.data?.data?.nft);
    }
    fetchData();
  }, [id])
  return (<>
    <Banner nftDetail={nftDetail} />
    <Details nftDetail={nftDetail} />
    <Offers />
    <ExploreMore />
  </>);
}
export default CollectionDetail