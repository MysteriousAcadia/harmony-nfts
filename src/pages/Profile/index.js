import LineTab from "components/Tabs/LineTab/index";
import graphQlInstance from "config/axios";
import Web3Context from "contexts/Context";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { isWalletConnected } from "web3Integration";
import CollectedItems from "./CollectedItems";
import Favorites from "./Favorites";
import FollowedCollections from "./FollowedCollections";
import ProfileSettingsTab from "./ProfileSettingsTab";
import "./style.css"

const Profile = ({ }) => {
    const { tab = 0 } = useParams();

    const [markets, setMarkets] = useState([]);
    useEffect(() => {


        const fetchMarkets = async () => {
            const result = await graphQlInstance.post("/graphql", {
                query: `{
  markets{
    id
  }
}`,
            });

            setMarkets(result.data?.data?.markets);

        };
        fetchMarkets();
    }, [])
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
            <CollectedItems markets={markets} />
            <Favorites />
            <FollowedCollections />

        </LineTab>
    </div>
    </>);
}
export default Profile