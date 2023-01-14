import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon} from '@fortawesome/free-solid-svg-icons'


const Header = props => {
  return (
    <div className='header'>
      <div className='flex-space-btwn'>
        <p>Where in the world</p>
        <div>
            <div className='flex'>
              <FontAwesomeIcon icon={faSun}/>
              <p>Light Mode</p>
            </div>
            {/* <div className='flex'>
              <FontAwesomeIcon icon={faMoon}/>
              <p>Dark Mode</p>
            </div> */}
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
