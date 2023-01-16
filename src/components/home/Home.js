import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Search from './Search'
import Filter from './Filter'
import Country from './Country'

const Home = ({countries, setRegion}) => {
  
  return countries == null ? <p>Loading.....</p> : 
    <div>
        <div className='flex flex-mobile-column search-filter'>
            <Search/>
            <Filter setRegion={setRegion}/>
        </div>
        <div className='country-grid'>
          {countries.map((country, index) => (
            <Link to={`country/${country.cca2}`}>
              <Country key={index} country={country}/>
            </Link>
          ))}
        </div>
    </div>
  
}

Home.propTypes = {
  countries: PropTypes.array,
  setRegion: PropTypes.func,
}
export default Home
