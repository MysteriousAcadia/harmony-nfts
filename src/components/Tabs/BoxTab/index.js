import { useState } from "react";
import "./style.css";
const BoxTab = ({ tabs, children }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (<>
        <div className=" w-full text-white font-bold">
            <div className="flex box-tab-head justify-around">
                <div className="flex">
                    {tabs.map((e, index) => {
                        return (<div
                            onClick={() => setSelectedTab(index)}
                            className={`cursor-pointer mx-4 px-4 ${index === selectedTab ? "box-nav-selected" : "box-nav-item"}`}>{e}</div>);
                    })}
                </div>
            </div>
            <div className="outlet mt-8">
                {children[selectedTab]}
            </div>
        </div>
    </>);
}
export default BoxTab