import ListingPic from "assets/listing_pic.svg";

const Artwork = () => {
	return (
		<>
			<div className="flex flex-col pl-32 text-white justify-center align-middle">
				<img src={ListingPic} alt="List for Sale Pic" className="mb-6" />
				<div className="font-light text-md">@Harmoonies</div>
				<div className="font-semibold text-lg">Harmoonie #234</div>
			</div>
		</>
	);
};

export default Artwork;
