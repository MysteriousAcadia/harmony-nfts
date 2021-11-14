import Heading from "components/Texts/Heading";
import dollar from "assets/HomePage/dollar.svg";
import shop from "assets/HomePage/shop.svg";
import wallet from "assets/HomePage/wallet.svg";

const Card = ({ image, title }) => {
    return (<div>
        <div className="glass-2 flex items-center w-48 h-40 p-8 mb-16">
            <img src={image} className="m-auto" />
        </div>
        <div className="font-bold text-xl text-white w-full text-center">{title}</div>
    </div>);
}
const cardData = [
    {
        title: "Connect your wallet",
        image: wallet,
    },
    {
        title: "Buy NFT's",
        image: shop,
    },
    {
        title: "Sell NFT's",
        image: dollar,
    },
]
const BuyAndSell = () => {
    return (<div className="w-full my-16 py-16">
        <div className="container mx-auto px-6">
            <Heading className="w-full text-center mb-32">Buy and sell NFT's</Heading>
            <div className="flex justify-evenly items-center">
                {cardData.map((data) => <Card {...data} />)}
            </div>
        </div>
    </div>)
}
export default BuyAndSell;