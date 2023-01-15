import React from 'react'
import PropTypes from 'prop-types'

const Country = ({country})=> {
  console.log(country)
  return (
    <div className='card'>
      <div className='flag'>
        <img src={country.flags.svg} className='flag-img-card'/>
      </div>
      <div className='country-details'>
        <p className='lg-text country-name'>{country.name.common}</p>
        <div className='flex card-details'>
            <p className='text-bold'>Population:</p>
            <p>{country.population}</p>
        </div>
        <div className='flex card-details'>
            <p className='text-bold'>Region:</p>
            <p>{country.region}</p>
        </div>
        <div className='flex card-details'>
            <p className='text-bold'>Capital:</p>
            {country.capital ? <p>{country.capital[0]}</p> : null}
            
        </div>
      </div>
    </div>
  )
}

Country.propTypes = {
  country: PropTypes.object,
}

export default Country
