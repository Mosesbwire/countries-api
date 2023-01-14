import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = props => {
  return (
    <div>
        <div>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <input type="text" placeholder="Search for a country..."/>
        </div>
    </div>
  )
}

Search.propTypes = {

}

export default Search
