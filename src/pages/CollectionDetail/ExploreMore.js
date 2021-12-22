import { Disclosure } from "@headlessui/react";
import graphQlInstance from "config/axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const NFTCard = ({ image, tokenId }) => {
	return (
		<>
			<div className="glass-2 w-full p-4 m-4 tex-sm">
				<div className="w-full bg-gray-300 h-64" style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover" }}></div>
				<div className="flex justify-between items-center mt-8 font-bold">
					<span>Harmoonie #{tokenId}</span>
				</div>
			</div>
		</>
	);
};

const ExploreMore = ({ }) => {
	const { marketId } = useParams();
	const navigate = useNavigate();
	const [nfts, setNfts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await graphQlInstance.post("/graphql", {
				query: `{
  nfts(first:3,where:{market:"${marketId}"}){
    image
    tokenId
  }
}
				`
			})
			setNfts(data?.data?.data?.nfts);


		}
		fetchData()
	}, [marketId])
	return (
		<>
			<div className="container px-4 mx-auto text-white">
				<Disclosure
					defaultOpen={true}
					as="div"
					className="w-full mt-6 bg-transparent border border-gray-400 rounded-md">
					{({ open }) => (
						<>
							<div>
								<Disclosure.Button className="p-6 text-left w-full flex justify-between items-center ">
									<span className="font-bold flex-grow w-full">
										More from the Collection
									</span>
									<span className="ml-6 h-7 flex items-center">{open ? "-" : "+"}</span>
								</Disclosure.Button>
							</div>
							<Disclosure.Panel
								as="div"
								className="mt-2 p-6 border-t border-gray-400 pr-12">
								<p className="flex items-center justify-between">
									{nfts.map((e) => <NFTCard{...e} />)}


									<div
										onClick={() => navigate(`/collections/${marketId}`)}
										className=" cursor-pointer flex-grow text-center text-lg w-2/3">
										View All ->
									</div>
								</p>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</>
	);
};
export default ExploreMore;
