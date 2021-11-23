import LineTab from "components/Tabs/LineTab/index";
import ProfileSettingsTab from "./ProfileSettingsTab";
import "./style.css"

const Profile = ({ }) => {
    return (<><div className="container px-4 mx-auto flex flex-col items-center">
        <LineTab tabs={[
            "Profile/Settings",
            "Collected Items",
            // "Favourites",
            // "Activity",
            // "Harmoonie Rewards"
        ]} >
            <ProfileSettingsTab />
            <ProfileSettingsTab />

        </LineTab>
    </div>
    </>);
}
export default Profile