import AllCard from "components/Cards/AllCard/index";

const Cards = ({ nfts = [] }) => {
	console.log(nfts);
	return (
		<>
			<div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-2 mb-16">
				{nfts.map(e => {
					return <AllCard data={e} />;
				})}
			</div>
		</>
	);
};
export default Cards;
