import { Disclosure } from "@headlessui/react";

const NFTCard = () => {
	return (
		<>
			<div className="glass-2 w-full p-4 m-4 tex-sm">
				<div className="w-full bg-gray-300 h-64"></div>
				<div className="flex justify-between items-center mt-8 font-bold">
					<span>Harmoonie #234</span>
					<span>500 ONE</span>
				</div>
			</div>
		</>
	);
};

const ExploreMore = ({}) => {
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
									<span className="ml-6 h-7 flex items-center">+</span>
								</Disclosure.Button>
							</div>
							<Disclosure.Panel
								as="div"
								className="mt-2 p-6 border-t border-gray-400 pr-12">
								<p className="flex items-center justify-between">
									<NFTCard />
									<NFTCard />
									<NFTCard />

									<div className="flex-grow text-center text-lg w-2/3">
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
