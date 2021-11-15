import { FeatureCard } from "components/Cards/FeaturedCard/index";
import FeaturedCollection from "components/Cards/FeaturedCollection/index";
import Slides from "components/Slides/index";
import Heading from "components/Texts/Heading";
const FeaturedCollections = () => {

    return (<div className="w-full my-16 py-16 ">
        <div className="container mx-auto px-12">
            <div className="flex justify-between text-white items-center mb-16">
                <Heading> Featured Collections</Heading>
                <div className="font-normal text-xl">View All ----</div>
            </div>
            <Slides settings={{ slidesToShow: 4, }}>
                <FeaturedCollection />
                <FeaturedCollection />
                <FeaturedCollection />

                <FeaturedCollection />

                <FeaturedCollection />
            </Slides>
        </div>
    </div >)
}
export default FeaturedCollections;