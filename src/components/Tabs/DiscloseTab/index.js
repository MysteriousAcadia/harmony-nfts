import { useEffect } from "react";
import { useState } from "react";
import "./style.css";
const DiscloseTab = ({ tabs, children, defaultTab }) => {
    const [selectedTab, setSelectedTab] = useState(defaultTab);
    useEffect(() => {
        setSelectedTab(defaultTab || 0);
    }, [defaultTab]);

    return (<>
        <div className="tabs py-2 w-full text-white font-bold">
            <div className="flex w-full nav-container">
                {tabs.map((e, index) => {
                    return (<div
                        onClick={() => setSelectedTab(index)}
                        className={`cursor-pointer disclose-${index == selectedTab ? "nav-selected" : "nav-item"}`}>{e}</div>);
                })}

            </div>
            <div className="disclose-outlet">
                {children[selectedTab]}
            </div>
        </div>
    </>);
}
export default DiscloseTab