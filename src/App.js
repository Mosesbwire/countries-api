import  React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import axios from 'axios'
import Header from './components/header/Header';
import Home from './components/home/Home';
import CountryDetails from './components/country/CountryDetails'
import './App.css';

const API_URL = 'https://restcountries.com/v3.1/all'

function App() {
  const [countries, setCountries] = useState(null)
  const [region,setRegion] = useState('')
  
  useEffect(()=>{
    const getAllCountries = async () =>{
      const res = await axios.get(API_URL)
      setCountries(res.data)
    }

    getAllCountries();
  }, [])

  useEffect(()=>{
    setCountries(null)
    const getRegionCountries = async () =>{
      if (region.length > 0){
        const res = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
        setCountries(res.data)
      }
    }

    getRegionCountries()
  }, [region])

  return (
    <div className="App light">
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path='/' element={<Home countries={countries} setRegion={setRegion} region={region}/>}/>
      <Route path='/country/:countryCode' element={<CountryDetails countries={countries}/>}/>
    </Routes>
    </BrowserRouter>
     
  
    </div>
  );
}

export default App;
