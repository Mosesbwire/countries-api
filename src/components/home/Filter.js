import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Filter = props => {
  return (
    <div>
      <div>
        <p>Filter by Region</p>
        <FontAwesomeIcon icon={faAngleDown}/>
      </div>
      <div>
        <p>Africa</p>
        <p>America</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>Ocenia</p>
      </div>
    </div>
  )
}

Filter.propTypes = {

}

export default Filter
