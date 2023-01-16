import React, { Fragment, useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
/*
the currencies have different object names figure out a uniform manner to acces the object
*/
const CountryDetails = ({countries}) => {
  const { countryCode } = useParams()

  const  [country, setCountry] = useState(null)
  const [borderCountry, setBorderCountry] = useState(null)

  useEffect(()=>{
    const selectedCountry = countries.filter(country => country.cca2 === countryCode)
    if (country == null){
      setCountry(selectedCountry)
    }
  }, [country,countryCode])

  useEffect(()=>{
      let neighbours = [];
      if (country !== null){
          let neighbourCodes = country[0].borders
          if (neighbourCodes){
            neighbourCodes.map(neighbour => {
                countries.map(state => {
                  if (state.cca3 === neighbour){
                    neighbours.push(state)
                  }
                })
            })
          }
      }
      setBorderCountry(neighbours)
      
  }, [country])

  const onClick = ()=>{
    setCountry(null)
  }
  

  return (country == null ? <p>Loading...</p> :
    <div className='container details-page'>
      <button className='btn'><FontAwesomeIcon icon={faArrowLeft} className='btn-icon'/> Back</button>
      <div className='details-section'>
        <div className='country-details-flag'>
            <img src={country[0].flags.svg}/>
        </div>
        <div className='country-full-details-container'>
            <p className='xlg-text'>{country[0].name.common}</p>
            <div className='country-full-details'>
                <div className='flex-space-btwn flex-mobile-column'>
                    <div className='geographic-details'>
                      <div className='flex'>
                          <p className='text-bold'>Native Name:</p>
                          {country[0].name.native ? <p>{country[0].name.native}</p> : <p>{country[0].name.common}</p>}
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Population:</p>
                          <p>{country[0].population}</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Region:</p>
                          <p>{country[0].region}</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Sub Region:</p>
                          <p>{country[0].subregion}</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Capital:</p>
                          <p>{country[0].capital[0]}</p>
                      </div>
                    </div>
                    <div className='demographic-details'>
                      <div className='flex'>
                          <p className='text-bold'>Top Level Domain:</p>
                          <p>{country[0].tld[0]}</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Currencies:</p>
                          <p>{Object.values(country[0].currencies)[0].name}</p>
                      </div>
                      <div className='flex'>
                          <p className='text-bold'>Languages:</p>
                          <div className='language-grid'>
                            {Object.values(country[0].languages).map(language =>(<p>{language}</p>))}
                          </div>
                      </div>
                    </div>
                </div>
                <div className='flex flex-mobile-column border-neighbours'>
                    <div className='border-title'>
                      <p className='text-bold text-lg'>Border Countries:</p>
                    </div>
                    <div className='border-grid'>
                      {borderCountry.map(state => (
                          <Link to={`/country/${state.cca2}`}>
                            <div className='neighbour' onClick={e => onClick()}>
                              <p>{state.name.common}</p>
                            </div>
                          </Link>
                      ))}

                    </div>
                </div>
          
            </div>
        </div>
      </div>
    </div>
  )
}

CountryDetails.propTypes = {
  countries: PropTypes.array,
}

export default CountryDetails
