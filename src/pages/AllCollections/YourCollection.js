import CurlUpArrow from "assets/Collections/curl_up_arrow.svg";
import SecondaryButton from "components/Buttons/Secondary";
import Heading from "components/Texts/Heading";
const YourCollection = () => {
    return (<>
        <div className="container mt-8 mb-16 mx-auto px-5 flex flex-col items-center">
            <img className="my-4" src={CurlUpArrow} />
            <Heading>Your collection could be here.</Heading>
            <div className="mt-1 mb-8 text-white"> Find out how to list your collection on Armoonia</div>
            <SecondaryButton>Learn More</SecondaryButton>
        </div>
    </>);
}
export default YourCollection;