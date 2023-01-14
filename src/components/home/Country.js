import React from 'react'
import PropTypes from 'prop-types'

const Country = props => {
  return (
    <div className='card'>
      <div className='flag'>
        
      </div>
      <div className='country-details'>
        <p className='lg-text country-name'>Germany</p>
        <div className='flex card-details'>
            <p className='text-bold'>Population:</p>
            <p>81,770,900</p>
        </div>
        <div className='flex card-details'>
            <p className='text-bold'>Region:</p>
            <p>Europe</p>
        </div>
        <div className='flex card-details'>
            <p className='text-bold'>Capital:</p>
            <p>Berlin</p>
        </div>
      </div>
    </div>
  )
}

Country.propTypes = {

}

export default Country
