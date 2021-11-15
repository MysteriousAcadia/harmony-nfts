import './App.css';
import Dashboard from 'pages/Dashboard/index';
import Navbar from 'components/Navbar/index';
import Footer from 'components/Footer/index';

function App() {
  return (<div className="base-background">
    <Navbar />
    <Dashboard />
    <Footer />
  </div>
  );
}

export default App;
