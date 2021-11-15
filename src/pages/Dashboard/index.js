import "./style.css";
import LandingSection from "./LandingSection";
import Featured from "./Featured";
import BuyAndSell from "./BuyAndSell";
import FeaturedCollections from "./FeaturedCollections";
import FAQ from "./FAQ";
const Dashboard = () => {
    return (<>
        <div className="">
            <LandingSection />
            <Featured />
            <BuyAndSell />
            <FeaturedCollections />
            <FAQ />

        </div>
    </>)
}
export default Dashboard