import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import { DAppProvider, ChainId } from "@usedapp/core";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Web3ReactProvider } from "@web3-react/core";
import { Harmony } from "@harmony-js/core";
import { Web3Provider } from "@ethersproject/providers";

import "./App.css";

import Dashboard from "pages/Dashboard/index";
import AllCollections from "pages/AllCollections/index";
import CollectionView from "pages/CollectionView/index";
import CollectionDetail from "pages/CollectionDetail/index";
import Profile from "pages/Profile/index";
import AboutUs from "pages/AboutUs/index";
import ListForSale from "pages/ListForSale/index";
import Stats from "pages/Stats/index";
import Footer from "components/Footer/index";
import Navbar from "components/Navbar/index";

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

function App() {
  return (
    <>
      <ReactNotification />

      <Web3ReactProvider getLibrary={getLibrary}>
        <ApolloProvider client={client}>
          {/* <MakeOffer /> */}

          <Web3ReactProvider getLibrary={getLibrary}>
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
                  <Route path="/nfts/:id" element={<CollectionDetail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/stats" element={<Stats />} />
                  <Route path="/collections/:marketId/:id/sale" element={<ListForSale />} />
                </Routes>
                <Footer />
              </div>
            </Router>
          </Web3ReactProvider>
        </ApolloProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
