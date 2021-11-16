import SecondaryButton from "components/Buttons/Secondary";
import Heading from "components/Texts/Heading";
//Assets
import DiscordIcon from "assets/discord_icon.svg"
import WebIcon from "assets/web_icon.svg"
import StatsIcon from "assets/stats_icon.svg"
import TwitterIcon from "assets/twitter_icon.svg"

const StatsCard = ({ value, title }) => {
    return (<div className="glass-2 px-8 py-8 flex flex-col items-center text-white">
        <div className="text-4xl font-bold">{value}</div>
        <div className="text-xl mt-2">{title}</div>
    </div>)
}
const stats = [
    {
        value: "10k",
        title: "Items",
    },
    {
        value: "1k",
        title: "Owners",
    },
    {
        value: "250 ONE",
        title: "Floor Price",
    },
    {
        value: "887K ONE",
        title: "Volume Traded",
    }
]

const Cover = ({ }) => {
    return (<>
        <div className="px-4 mx-auto mt-8 flex items-center flex-col w-full">
            <div className="w-full bg-gray-100 h-48" />
            <div className="absolute blur-glass rounded-full w-40 h-40 top-64 left-1/2 shadow-lg" style={{ transform: "translate(-50%,0)" }} >
                <img className=" rounded-full m-2 w-36 h-36 bg-gray-400  " />

            </div>
            <Heading className="mt-24">Harmoonies</Heading>
            <div className=" mt-4 mb-4 flex justify-between">
                <img src={WebIcon} className="m-2" />
                <img src={StatsIcon} className="m-2" />
                <img src={DiscordIcon} className="m-2" />
                <img src={TwitterIcon} className="m-2" />
            </div>
            <SecondaryButton>Follow +</SecondaryButton>
            <div className="text-center text-white mx-6 lg:mx-32 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                {stats.map((element) => <StatsCard {...element} />)}
            </div>

        </div>
    </>);
}
export default Cover