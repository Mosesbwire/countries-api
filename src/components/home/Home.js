import React from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import Filter from './Filter'
import Country from './Country'

const Home = props => {
  return (
    <div>
        <div className='flex flex-mobile-column'>
            <Search/>
            <Filter/>
        </div>
        <div>
            <Country/>
        </div>
    </div>
  )
}

Home.propTypes = {

}
export default Home
