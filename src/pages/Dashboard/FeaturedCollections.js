import { FeatureCard } from "components/Cards/FeaturedCard/index";
import FeaturedCollection from "components/Cards/FeaturedCollection/index";
import Slides from "components/Slides/index";
import Heading from "components/Texts/Heading";
import graphQlInstance from "config/axios";
import { useState } from "react";
import { useEffect } from "react";
const FeaturedCollections = () => {
    const [collections, setCollections] = useState();
    useEffect(() => {

        const fetchData = async () => {
            console.log(await graphQlInstance.post("/graphql", {
                query: `{
	markets(where: {token: "0x3c8a8a7b7d0fea5078fb37c69e42b85d8fc6a063"}) {
    token
    nfts {
      id
    }
    totalSales
    totalSellOrders
    totalAuctions
  }
            }
` }));
        }
        fetchData();

    }, [])
    return (<div className="w-full my-16 py-16 ">
        <div className="container mx-auto px-12">
            <div className="flex justify-between text-white items-center mb-16">
                <Heading> Featured Collections</Heading>
                <div className="font-normal text-xl">View All ----</div>
            </div>
            <Slides settings={{ slidesToShow: 4, }}>
                <FeaturedCollection />
                <FeaturedCollection />
                <FeaturedCollection />

                <FeaturedCollection />

                <FeaturedCollection />
            </Slides>
        </div>
    </div >)
}
export default FeaturedCollections;