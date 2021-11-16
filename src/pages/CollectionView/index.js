import Cards from "./Cards";
import Cover from "./Cover";
import Filters from "./Filters";

const CollectionView = () => {
    return (<>
        <div className="container px-4 mx-auto">
            <Cover />
            <Filters />
            <Cards />
        </div>
    </>);
}
export default CollectionView;