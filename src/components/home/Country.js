import React from 'react'
import PropTypes from 'prop-types'

const Country = props => {
  return (
    <div>
      <div>
        <p>Flag section</p>
      </div>
      <div>
        <p>Germany</p>
        <div>
            <p>Population</p>
            <p>81,770,900</p>
        </div>
        <div>
            <p>Region</p>
            <p>Europe</p>
        </div>
        <div>
            <p>Capital</p>
            <p>Berlin</p>
        </div>
      </div>
    </div>
  )
}

Country.propTypes = {

}

export default Country
