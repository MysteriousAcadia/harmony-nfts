import { useEffect } from "react";
import { useState } from "react";
import "./style.css";
const LineTab = ({ tabs, children, defaultTab }) => {
    const [selectedTab, setSelectedTab] = useState(defaultTab);
    useEffect(() => {
        setSelectedTab(defaultTab || 0);
    }, [defaultTab]);

    return (<>
        <div className="tabs w-full text-white font-bold">
            <div className="flex justify-around">
                <div className="flex">
                    {tabs.map((e, index) => {
                        return (<div
                            onClick={() => setSelectedTab(index)}
                            className={`cursor-pointer ${index == selectedTab ? "nav-selected" : "nav-item"}`}>{e}</div>);
                    })}
                </div>

            </div>
            <div className="outlet">
                {children[selectedTab]}
            </div>
        </div>
    </>);
}
export default LineTab