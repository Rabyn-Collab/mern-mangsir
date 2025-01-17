import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='bg-black text-white py-2 px-3'>

      <h1>App Logo</h1>

      <nav>
        <NavLink to={'/about'}>About</NavLink>
      </nav>




    </div>
  )
}

export default Header
