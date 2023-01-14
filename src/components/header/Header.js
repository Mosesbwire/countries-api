import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon} from '@fortawesome/free-solid-svg-icons'


const Header = props => {
  return (
    <div className='header'>
      <div>
        <p>Where in the world</p>
        <div>
            <div>
              <FontAwesomeIcon icon={faSun}/>
              <p>Light Mode</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMoon}/>
              <p>Dark Mode</p>
            </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
