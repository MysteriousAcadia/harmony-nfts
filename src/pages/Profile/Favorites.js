import AllCard from "components/Cards/AllCard/index";
import BoxTab from "components/Tabs/BoxTab/index";
import { useState } from "react";

const Favorites = ({ }) => {
    const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1,]);
    return (<>
        <div className="w-full my-16 mx-auto ">
            <div className="w-full items-center">

                <div className="grid grid-cols-4 gap-4">
                    <AllCard />
                    <AllCard />
                    <AllCard />
                    <AllCard />
                    <AllCard />
                    <AllCard />
                    <AllCard />
                    <AllCard />
                    <AllCard />
                </div>


            </div>
        </div>
    </>);
}
export default Favorites