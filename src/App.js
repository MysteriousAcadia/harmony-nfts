import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "pages/Dashboard/index";
import AllCollections from "pages/AllCollections/index";
import Navbar from "components/Navbar/index";
import Footer from "components/Footer/index";
import CollectionView from "pages/CollectionView/index";
import CollectionDetail from "pages/CollectionDetail/index";
import { DAppProvider, ChainId } from "@usedapp/core";
import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";
import { Web3ReactProvider } from "@web3-react/core";
import MakeOffer from "components/Modals/MakeOffer/index";
import { Web3Provider } from "@ethersproject/providers";
import { Harmony } from "@harmony-js/core";
import Profile from "pages/Profile/index";
import AboutUs from "./pages/AboutUs/index";

function getLibrary(provider) {
	var library;

	if (provider?.chainType === "hmy") {
		library = provider.blockchain;
	} else {
		library = new Web3Provider(provider);
		library.pollingInterval = 12000;
	}

	return library;
}

const config = {
	readOnlyChainId: 1666700000,
	readOnlyUrls: {
		[1666700000]: "https://api.s0.b.hmny.io",
	},
	supportedChains: [1666700000],
	multicallAddresses: {
		[1666700000]: "0xd078799c53396616844e2fa97f0dd2b4c145a685",
	},
};
// 1

// 2
const httpLink = createHttpLink({
	uri: "http://marketplace-api.freyala.com:8080",
});

// 3
const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
console.log(ChainId);
function App() {
	return (
		<>
			<Web3ReactProvider getLibrary={getLibrary}>
				<ApolloProvider client={client}>
					{/* <MakeOffer /> */}

					<DAppProvider config={config}>
						<Router>
							<div className="base-background">
								<Navbar />
								<Routes>
									<Route path="/" element={<Dashboard />} />
									<Route path="/collections" element={<AllCollections />} />
									<Route
										path="/collections/:marketId"
										element={<CollectionView />}
									/>
									<Route
										path="/collections/:marketId/:id"
										element={<CollectionDetail />}
									/>
									<Route path="/profile" element={<Profile />} />
									<Route path="/about" element={<AboutUs />} />
								</Routes>
								<Footer />
							</div>
						</Router>
					</DAppProvider>
				</ApolloProvider>
			</Web3ReactProvider>
		</>
	);
}

export default App;
