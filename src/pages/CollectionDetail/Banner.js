import logoLight from "assets/logo_light.png";
import PrimaryButton from "components/Buttons/Primary";
import SecondaryButton from "components/Buttons/Secondary";
import HeartIcon from "assets/heart_icon.svg";
const Stats = () => {
    const stats = [{ value: "10k+", title: "Artworks" }, { value: "3k+", title: "Artists" }, { value: "10k+", title: "Artworks" },];
    return (<>
        <div className="mt-6 flex items-center">
            {stats.map((stat, index) => {
                return (<><div className={`${index === 0 ? "pr-8" : "px-8"} py-2 flex flex-col my-8 items-center justify-between`}>
                    <div className="font-bold text-2xl">{stat.value}</div>
                    <div className=" mt-4 text-base">{stat.title}</div>
                </div>
                    {index < (stats.length - 1) && <div className="h-6 border-l border-white" />}

                </>
                )
            })}
        </div>
    </>);
}
const MainCard = () => {
    return (<div className=" h-60v w-40v p-2  rounded-lg">

        <div className=" p-4 blur-glass h-60v mt-8 w-35v" >
            <img className="w-full bg-gray-200 rounded-md h-full" />
            <div className="absolute bg-white right-8 top-8 rounded-md">
                <div className="flex text-main-default p-4"><img src={HeartIcon} className=" h-6 w-6 mr-2" />16</div>
            </div>
        </div>

    </div>)
}

const Banner = () => {
    return (<>
        <div className="flex container px-4 mx-auto text-white items-start justify-between pt-8 pb-16">
            <MainCard />
            <div className="flex flex-col items-start ml-32">
                <div className="inline-block font-bold text-5xl" >
                    Harmoonie #234
                </div>
                <div>Owned by <u><b>@harmoonies</b></u></div>
                <b className="mt-8">Description</b>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <b className="mt-8">Sale Ends on Nov 20th 2021 at 15:31 CET</b>
                <div className="flex flex-grow gap-8 mt-8 justify-between">
                    <div className="">
                        <div className="font-bold text-3xl mb-2">1</div>
                        <div className=" text-sm">Hour</div>
                    </div>
                    <div>
                        <div className="font-bold text-3xl mb-2">5</div>
                        <div className=" text-sm">Minutes</div>
                    </div>
                    <div>
                        <div className="font-bold text-3xl mb-2">10</div>
                        <div className=" text-sm">Seconds</div>
                    </div>
                </div>
                <div className="font-bold text-sm mt-8 mb-4">Current bid</div>
                <div className="flex items-center "><div className="font-bold text-4xl mb-2 mr-4">8500 ONE</div>
                    <div className=" text-sm">$1,446.15</div></div>
                <div className="flex">
                    <PrimaryButton className="my-4 mr-4"> Buy Now</PrimaryButton>
                    <SecondaryButton className="my-4">Make Offer</SecondaryButton>
                </div>

            </div>

            <div>

            </div>
        </div>
    </>);
}
export default Banner;