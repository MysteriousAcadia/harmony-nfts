import "./style.css";
import LandingSection from "./LandingSection";
import Featured from "./Featured";
import BuyAndSell from "./BuyAndSell";
import FeaturedCollections from "./FeaturedCollections";
const Dashboard = () => {
    return (<>
        <div className="base-background">
            <LandingSection />
            <Featured />
            <BuyAndSell />
            <FeaturedCollections />

        </div>
    </>)
}
export default Dashboard