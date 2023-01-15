import Header from './components/header/Header';
import Home from './components/home/Home';
import CountryDetails from './components/country/CountryDetails'
import './App.css';

function App() {
  return (
    <div className="App light">
     <Header/>
     {/* <Home/> */}
     <CountryDetails/>
    </div>
  );
}

export default App;
