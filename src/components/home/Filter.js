import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Filter = props => {
  const [isOpen, setIsOpen] = useState(false)
  const openFilter = () => {
    console.log('clicked')
    setIsOpen(!isOpen)
  }
  return (
    <div className='filter'>
      <div className='flex-space-btwn filter-heading'>
        <p>Filter by Region</p>
        <FontAwesomeIcon icon={faAngleDown} onClick={openFilter}/>
      </div>
      {isOpen ?
      <div className='regions'>
        <p>Africa</p>
        <p>America</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>Ocenia</p>
      </div> : null
      }
    </div>
  )
}

Filter.propTypes = {

}

export default Filter
