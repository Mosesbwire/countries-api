import React from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import Filter from './Filter'
import Country from './Country'

const Home = ({countries}) => {
  let x = 0;
  return countries == null ? <p>Loading.....</p> : 
    <div>
        <div className='flex flex-mobile-column search-filter'>
            <Search/>
            <Filter/>
        </div>
        <div className='country-grid'>
          {countries.map((country, index) => (
            
            <Country key={index} country={country}/>
          ))}
        </div>
    </div>
  
}

Home.propTypes = {
  countries: PropTypes.array,
}
export default Home
