import AllCard from "components/Cards/AllCard/index";

const Cards = ({ }) => {
    return (<>
        <div className="container px-4 mx-auto grid grid-cols-4 gap-8 mt-2 mb-16">
            <AllCard />
            <AllCard />
            <AllCard />
            <AllCard />
            <AllCard />
            <AllCard />
            <AllCard />
        </div>
    </>);
}
export default Cards