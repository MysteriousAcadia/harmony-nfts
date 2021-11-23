import Heading from "components/Texts/Heading";
import graphQlInstance from "config/axios";
import { useState } from "react";
import { useEffect } from "react";
import CollectionList from "./CollectionList";
import YourCollection from "./YourCollection";

const AllCollections = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await graphQlInstance.post("/graphql", {
                query: `{
    markets(first: 100){
        active
        name
        id
        token
    }
}

`});
            setCollections(result.data?.data?.markets);
        }
        fetchData();
    }, [])
    return (<>
        <div className="w-full">
            <div className="text-white text-center mt-8 mb-16 mx-auto">
                <Heading> All Collections</Heading>
            </div>
            <CollectionList collections={collections} />
            <YourCollection />
        </div>
    </>);
}
export default AllCollections;