import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Filter = ({setRegion}) => {
  const [isOpen, setIsOpen] = useState(false)
  const openFilter = () => {
    
    setIsOpen(!isOpen)
  }

  const onClick = (e)=>{
    setRegion(e.target.innerText)
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
        <p onClick={e => onClick(e)}>Africa</p>
        <p onClick={e => onClick(e)}>America</p>
        <p onClick={e => onClick(e)}>Asia</p>
        <p onClick={e => onClick(e)}>Europe</p>
        <p onClick={e => onClick(e)}>Oceania</p>
      </div> : null
      }
    </div>
  )
}

Filter.propTypes = {
  setRegion: PropTypes.func,
}

export default Filter
