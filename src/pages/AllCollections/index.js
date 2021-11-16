import Heading from "components/Texts/Heading";
import CollectionList from "./CollectionList";
import YourCollection from "./YourCollection";

const AllCollections = () => {
    return (<>
        <div className="w-full">
            <div className="text-white text-center mt-8 mb-16 mx-auto">
                <Heading> All Collections</Heading>
            </div>
            <CollectionList />
            <YourCollection />
        </div>
    </>);
}
export default AllCollections;