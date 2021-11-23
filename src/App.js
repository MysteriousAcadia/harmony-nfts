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
import MakeOffer from "components/Modals/MakeOffer/index";
import LineTab from "components/Tabs/LineTab/index";
import Profile from "pages/Profile/index";
import AboutUs from "pages/AboutUs/index";

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
									path="/collections/harmoonies"
									element={<CollectionView />}
								/>
								<Route
									path="/collections/harmoonies/1"
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
			,
		</>
	);
}

export default App;
