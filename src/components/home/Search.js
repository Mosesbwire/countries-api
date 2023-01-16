import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = ({setQuery}) => {
  return (
    <div>
        <div className="search-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mag-glass'/>
            <input className="input" type="search" placeholder="Search for a country..." onChange={e => setQuery(e.target.value)}/>
        </div>
    </div>
  )
}

Search.propTypes = {
  setQuery: PropTypes.func,
}

export default Search
