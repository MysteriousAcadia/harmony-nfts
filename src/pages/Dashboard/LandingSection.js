import logoLight from "assets/logo_light.png";
import PrimaryButton from "components/Buttons/Primary";
import SecondaryButton from "components/Buttons/Secondary";
import { bid } from "web3Integration";
import { useNavigate } from "react-router-dom";
import PreviewImage from "assets/HomePage/preview_image.png";
const Stats = () => {
  const stats = [
    { value: "10k+", title: "Artworks" },
    { value: "3k+", title: "Artists" },
    { value: "10k+", title: "Artworks" },
  ];
  return (
    <>
      <div className="hidden mt-6 md:flex items-center">
        {stats.map((stat, index) => {
          return (
            <>
              <div
                className={`${index === 0 ? "pr-8" : "px-8"
                  } py-2 flex flex-col my-8 items-center justify-between`}
              >
                <div className="font-bold text-2xl">{stat.value}</div>
                <div className=" mt-4 text-base">{stat.title}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="h-6 border-l border-white" />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
const MainCard = () => {
  return (
    <div className="relative main-card-container w-full md:w-40v p-2  rounded-lg">
      <div
        className=" absolute blur-glass w-2/3 h-40v blur-glass left-1/2"
        style={{ transform: "translate(-50%,0)" }}
      />

      <div
        className="blur-glass absolute w-3/4 md:w-30v mt-4 h-40v blur-glass left-1/2"
        style={{ transform: "translate(-50%,0)" }}
      />
      <div
        className="absolute  blur-glass p-4 mt-8 w-full  md:w-35v  left-1/2"
        style={{ transform: "translate(-50%,0)" }}
      >
        <img className="w-full bg-transparent rounded-md object-cover main-card-container-image" src={PreviewImage} alt="PreviewI" />
      </div>
      <div className="absolute text-black-default blur-glass -left-1 top-5 md:top-20 backdrop-blur-3xl p-4 rounded-md w-48 h-24">
        <div className="font-bold text-base"> Harmoonie #032</div>
        <div className="font-normal text-sm">@Harmoonies</div>
      </div>
      <BidCard />
    </div>
  );
};
const BidCard = () => {
  return (
    <div className="absolute w-full md:w-30v blur-glass -bottom-12 -left-4 p-4 md:p-8 rounded-md">
      <div className="flex text-black-default">
        <div className="flex-grow-0 mr-2 md:mr-4">
          <div className="font-normal text-sm mb-2">Current bid</div>
          <div className="font-bold text-2xl mb-2">8500 ONE</div>
          <div className="text-black-secondary text-sm">$1,446.15</div>
        </div>
        <div className="flex flex-grow justify-between">
          <div className="">
            <div className="font-normal text-xs md:text-sm mb-2">Ends in</div>
            <div className="font-bold text-2xl mb-2">1</div>
            <div className="text-black-secondary text-xs md:text-sm">Hour</div>
          </div>
          <div>
            <div className="font-normal text-xs md:text-sm mb-2">
              {" "}
              <br />
            </div>
            <div className="font-bold text-2xl mb-2">5</div>
            <div className="text-black-secondary text-xs md:text-sm">Minutes</div>
          </div>
          <div>
            <div className="font-normal text-xs md:text-sm mb-2">
              <br />{" "}
            </div>
            <div className="font-bold text-2xl mb-2">10</div>
            <div className="text-black-secondary text-xs md:text-sm">Seconds</div>
          </div>
        </div>
      </div>
      <div className="absolute flex -bottom-10 -right-10 md:-left-10">
        <PrimaryButton className="mr-4" onClick={bid}>
          {" "}
          Place a Bid
        </PrimaryButton>{" "}
        <SecondaryButton>View Details</SecondaryButton>
      </div>
    </div>
  );
};
const LandingSection = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="md:flex container px-4 mx-auto text-white items-start justify-between md:pt-8 pb-16">
        <div className="flex flex-col items-start md:mr-32">
          <img src={logoLight} alt="Logo" />
          <div
            className="inline-block font-bold text-6xl"
            style={{ textShadow: "0px 4px 4px #00000040" }}
          >
            <span className="discover-text2"> Discover</span>
            <span> the amazing world of NFT's</span>
          </div>
          <div className="text-lg my-4">
            First of our kind generative NFT project on Harmony
          </div>
          <PrimaryButton
            onClick={() => navigator("/collections")}
            className="my-4"> Explore Marketplace</PrimaryButton>
          <Stats />
        </div>
        <div className="m-4">
          <MainCard />
        </div>
        <div></div>
      </div>
    </>
  );
};
export default LandingSection;
