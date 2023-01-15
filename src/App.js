import  React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './components/header/Header';
import Home from './components/home/Home';
import CountryDetails from './components/country/CountryDetails'
import './App.css';

const API_URL = 'https://restcountries.com/v3.1/all'

function App() {
  const [countries, setCountries] = useState(null)
  
  useEffect(()=>{
    const getAllCountries = async () =>{
      const res = await axios.get(API_URL)
      setCountries(res.data)
    }

    getAllCountries();
  }, [])


  return (
    <div className="App light">
      
     <Header/>
     <Home countries={countries}/>
     {/* <CountryDetails/> */}
    </div>
  );
}

export default App;
