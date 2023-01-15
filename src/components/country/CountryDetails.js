import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CountryDetails = props => {
  return (
    <div className='container details-page'>
      <button className='btn'><FontAwesomeIcon icon={faArrowLeft} className='btn-icon'/> Back</button>
      <div className='details-section'>
        <div className='country-details-flag'>
            <p>FLAG</p>
        </div>
        <div className='country-full-details-container'>
            <p className='xlg-text'>Belgium</p>
            <div className='country-full-details'>
                <div className='flex-space-btwn flex-mobile-column'>
                    <div className='geographic-details'>
                      <div className='flex'>
                          <p className='text-bold'>Native Name:</p>
                          <p>Belgie</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Population:</p>
                          <p>11,319,511</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Region:</p>
                          <p>Europe</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Sub Region:</p>
                          <p>Western Europe</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Capital:</p>
                          <p>Brussels</p>
                      </div>
                    </div>
                    <div className='demographic-details'>
                      <div className='flex'>
                          <p className='text-bold'>Top Level Domain:</p>
                          <p>.be</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Currencies:</p>
                          <p>Euro</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Languages:</p>
                          <div className='flex'>
                            <p>Dutch,</p>
                            <p>French,</p>
                            <p>German</p>
                          </div>
                      </div>
                    </div>
                </div>
                <div className='flex flex-mobile-column border-neighbours'>
                    <div className='border-title'>
                      <p className='text-bold text-lg'>Border Countries:</p>
                    </div>
                    <div className='border-grid'>
                      <div className='neighbour'>
                        <p>France</p>
                      </div>
                      <div className='neighbour'>
                        <p>Germany</p>
                      </div>
                      <div className='neighbour'>
                        <p>Netherlands</p>
                      </div>
                      
                    </div>
                </div>
          
            </div>
        </div>
      </div>
    </div>
  )
}

CountryDetails.propTypes = {

}

export default CountryDetails
