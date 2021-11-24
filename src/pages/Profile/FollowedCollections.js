import AllCard from "components/Cards/AllCard/index";
import AllCollection from "components/Cards/AllCollection/index";
import BoxTab from "components/Tabs/BoxTab/index";
import { useState } from "react";

const FollowedCollections = ({ }) => {
    const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1,]);
    return (<>
        <div className="w-full my-16 mx-auto ">
            <div className="w-full items-center">

                <div className="grid grid-cols-3 gap-4">
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />
                    <AllCollection />

                </div>


            </div>
        </div>
    </>);
}
export default FollowedCollections