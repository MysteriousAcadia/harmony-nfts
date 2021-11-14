import { FeatureCard } from "components/Cards/FeaturedCard/index";
import Slides from "components/Slides/index";
import Heading from "components/Texts/Heading";
const Featured = () => {

    return (<div className="w-full my-16 py-16 glass-background">
        <div className="container mx-auto px-6">
            <div className="flex justify-between text-white items-center mb-16">
                <Heading> Featured Artworks</Heading>
                <div className="font-normal text-xl">View All ----</div>
            </div>
            <Slides>
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </Slides>
        </div>
    </div >)
}
export default Featured;