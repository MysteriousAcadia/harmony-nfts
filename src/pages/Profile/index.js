import LineTab from "components/Tabs/LineTab/index";
import CollectedItems from "./CollectedItems";
import Favorites from "./Favorites";
import FollowedCollections from "./FollowedCollections";
import ProfileSettingsTab from "./ProfileSettingsTab";
import "./style.css"

const Profile = ({ }) => {
    return (<><div className="container px-4 mx-auto flex flex-col items-center">
        <LineTab tabs={[
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