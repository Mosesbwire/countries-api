import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CountryDetails = props => {
  return (
    <div>
      <button><FontAwesomeIcon icon={faArrowLeft}/> Back</button>
      <div className='flex flex-mobile-column'>
        <div className='country-details-flag'>
            <p>FLAG</p>
        </div>
        <div>
            <p>Belgium</p>
            <div className='country-details'>
                <div className='flex flex-mobile-column'>
                    <div className='geographic-details'>
                      <div className='flex'>
                          <p>Native Name:</p>
                          <p>Belgie</p>
                      </div>
                      <div className='flex'>
                          <p>Population:</p>
                          <p>11,319,511</p>
                      </div>
                      <div className='flex'>
                          <p>Region:</p>
                          <p>Europe</p>
                      </div>
                      <div className='flex'>
                          <p>Sub Region:</p>
                          <p>Western Europe</p>
                      </div>
                      <div className='flex'>
                          <p>Capital:</p>
                          <p>Brussels</p>
                      </div>
                    </div>
                    <div className='demographic-details'>
                      <div className='flex'>
                          <p>Top Level Domain:</p>
                          <p>be</p>
                      </div>
                      <div className='flex'>
                          <p>Currencies:</p>
                          <p>Euro</p>
                      </div>
                      <div className='flex'>
                          <p>Languages:</p>
                          <div className='flex'>
                            <p>Dutch,</p>
                            <p>French</p>
                            <p>German</p>
                          </div>
                      </div>
                    </div>
                </div>
                <div className='flex border-neighbours'>
                    <div className='border-title'>
                      <p>Border Neighbours:</p>
                    </div>
                    <div className='flex'>
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
