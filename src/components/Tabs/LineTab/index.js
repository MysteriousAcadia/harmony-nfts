import { useState } from "react";
import "./style.css";
const LineTab = ({ tabs, children }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (<>
        <div className="tabs w-full text-white font-bold">
            <div className="flex">
                {tabs.map((e, index) => {
                    return (<div
                        onClick={() => setSelectedTab(index)}
                        className={`cursor-pointer ${index === selectedTab ? "nav-selected" : "nav-item"}`}>{e}</div>);
                })}

            </div>
            <div className="outlet">
                {children[selectedTab]}
            </div>
        </div>
    </>);
}
export default LineTab