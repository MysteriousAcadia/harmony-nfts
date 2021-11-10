import logoLight from "assets/logo_light.png";
import PrimaryButton from "components/Buttons/Primary";
const Stats = () => {
    const stats = [{ value: "10k+", title: "Artworks" }, { value: "3k+", title: "Artists" }, { value: "10k+", title: "Artworks" },];
    return (<>
        <div className="grid grid-cols-3 divide-x divide-green-500">
            {stats.map((stat) => {
                return (<div className="flex flex-col justify-between">
                    <div>{stat.value}</div>
                    <div>{stat.title}</div>
                </div>
                )
            })}
        </div>
    </>);
}
const MainCard = () => {
    return (<div className="relative h-60v w-40v p-2  rounded-lg">
        <img className="bg-gray-200 h-60v w-40v rounded-md" />
        <div className="absolute text-black-default blur-glass -left-4 top-8 backdrop-blur-3xl p-4 rounded-md w-48 h-24">
            <div className="font-bold text-base"> Harmoonie #032</div>
            <div className="font-normal text-sm">@Harmoonies</div>
        </div>
        <BidCard />
    </div>)
}
const BidCard = () => {
    return (<div className="absolute  w-30v blur-glass -bottom-12 -left-4 p-4 rounded-md">
        <div className="flex text-black-default">
            <div className="w-24">
                <div className="font-normal text-sm">Current bid</div>
                <div className="font-bold text-2xl">8500 ONE</div>
                <div className="text-black-secondary text-sm">$1,446.15</div>
            </div>
        </div>
    </div>);
}
const LandingSection = () => {
    return (<>
        <div className="flex container px-4 text-white items-center pt-24">
            <div className="flex flex-col items-start flex-1">
                <img src={logoLight} alt="Logo" />
                <div className="inline-block font-bold text-6xl  drop-shadow-pm">
                    <span className="drop-shadow-sm"> Discover</span><span> the amazing world of NFT's</span>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <PrimaryButton> Explore Marketplace</PrimaryButton>
                <Stats />

            </div>
            <div className="flex-1">

                <MainCard />

            </div>
            <div>

            </div>
        </div>
    </>);
}
export default LandingSection;