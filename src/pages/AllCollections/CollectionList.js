import AllCollection from "components/Cards/AllCollection/index";
import LightDropdown from "components/Dropdowns/LightDropdown/index";

const filterOptions = [
    "A-Z",
    "Z-A",
    "Daily Volume (Low to High)",
    "Daily Volume (Hight to Low)",
    "Weekly Volume (Hight to Low)",
    "Weekly Volume (High to Low)",
    "Total Volume (Hight to Low)",
    "Total Volume (High to Low)",
]

const CollectionList = ({ collections }) => {
    return (<>
        <div className="container md:px-4 mx-auto">
            <div className="flex justify-end pr-2 mr-8 mb-8">
                <LightDropdown
                    options={filterOptions}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {collections.map(e => <AllCollection data={e} />)}

            </div>
        </div>
    </>);
}
export default CollectionList;