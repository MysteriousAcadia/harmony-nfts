import { FeatureCard } from "components/Cards/FeaturedCard/index";
import Slides from "components/Slides/index";
import Heading from "components/Texts/Heading";
import graphQlInstance from "config/axios";
import { useState } from "react";
import { useEffect } from "react";
const Featured = () => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await graphQlInstance.post("/graphql", {
        query: `{
  nfts(first:5) {
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
      setNfts(result.data?.data?.nfts);
    }
    fetchData();
  }, [])

  return (<div className="w-full my-16 py-16 glass-background">
    <div className="container mx-auto px-12">
      <div className="md:flex justify-between text-white items-center mb-16">
        <Heading> Featured Artworks</Heading>
        <div className="font-normal text-xl">View All -></div>
      </div>
      <Slides
        settings={{ slidesToShow: Math.min(3, nfts?.length) }}
      >
        {nfts?.map(e => <FeatureCard {...e} />)}
      </Slides>
    </div>
  </div >)
}
export default Featured;