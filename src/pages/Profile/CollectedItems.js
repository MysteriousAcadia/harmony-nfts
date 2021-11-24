import AllCard from "components/Cards/AllCard/index";
import BoxTab from "components/Tabs/BoxTab/index";
import { useState } from "react";

const CollectedItems = ({ }) => {
    const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1,]);
    return (<>
        <div className="container my-16 mx-auto px-4">
            <div className="flex flex-col w-full items-center">
                <BoxTab
                    tabs={["Unlisted", "On Sale", "Bids and Offers"]}
                >
                    <div>
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
                    <div>

                    </div>
                    <div>

                    </div>
                </BoxTab>
            </div>
        </div>
    </>);
}
export default CollectedItems