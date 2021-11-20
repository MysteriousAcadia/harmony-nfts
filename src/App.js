import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Dashboard from 'pages/Dashboard/index';
import AllCollections from "pages/AllCollections/index";
import Navbar from 'components/Navbar/index';
import Footer from 'components/Footer/index';
import CollectionView from "pages/CollectionView/index";
import CollectionDetail from "pages/CollectionDetail/index";
import { DAppProvider, ChainId } from "@usedapp/core";


const config = {
  readOnlyChainId: 1666700000,
  readOnlyUrls: {
    [1666700000]: "https://api.s0.b.hmny.io"
  },
  supportedChains: [
    1666700000
  ],
  multicallAddresses: {
    [1666700000]: '0xd078799c53396616844e2fa97f0dd2b4c145a685'
  }
}
console.log(ChainId);
function App() {
  return (<>
    <DAppProvider config={config}>

      <Router>
        <div className="base-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/collections" element={<AllCollections />} />
            <Route path="/collections/harmoonies" element={<CollectionView />} />
            <Route path="/collections/harmoonies/1" element={<CollectionDetail />} />
          </Routes>
          <Footer />

        </div>
      </Router>
    </DAppProvider>
  </>);
}

export default App;
