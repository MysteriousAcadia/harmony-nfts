import "./style.css";
import LandingSection from "./LandingSection";
import Featured from "./Featured";
import BuyAndSell from "./BuyAndSell";
import FeaturedCollections from "./FeaturedCollections";
import FAQ from "./FAQ";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
const Dashboard = () => {
    const myRef = useRef(null)

    const { section } = useParams();
    useEffect(() => {
        if (section === "FAQ") {
            myRef.current.scrollIntoView({ behaviour: "smooth" })
        }
    }, [section]);


    return (<>
        <div className="">
            <LandingSection />
            <Featured />
            <BuyAndSell />
            <FeaturedCollections />
            <div ref={myRef}>
                <FAQ />
            </div>

        </div>
    </>)
}
export default Dashboard