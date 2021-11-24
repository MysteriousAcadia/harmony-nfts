import LineTab from "components/Tabs/LineTab/index";
import { useParams } from "react-router";
import CollectedItems from "./CollectedItems";
import Favorites from "./Favorites";
import FollowedCollections from "./FollowedCollections";
import ProfileSettingsTab from "./ProfileSettingsTab";
import "./style.css"

const Profile = ({ }) => {
    const { tab = 0 } = useParams();
    return (<><div className="container px-4 mx-auto flex flex-col items-center">
        <LineTab
            defaultTab={tab}
            tabs={[
                "Profile/Settings",
                "Collected Items",
                "Favorites",
                "Followed Collections",
                // "Activity",
                // "Harmoonie Rewards"
            ]} >
            <ProfileSettingsTab />
            <CollectedItems />
            <Favorites />
            <FollowedCollections />

        </LineTab>
    </div>
    </>);
}
export default Profile