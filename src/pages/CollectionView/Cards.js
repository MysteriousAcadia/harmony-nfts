import AllCard from "components/Cards/AllCard/index";

const Cards = ({ nfts = [] }) => {
	return (
		<>
			<div className="container px-4 mx-auto grid grid-cols-4 gap-8 mt-2 mb-16">
				{nfts.map(e => {
					return <AllCard data={e} />;
				})}
			</div>
		</>
	);
};
export default Cards;
