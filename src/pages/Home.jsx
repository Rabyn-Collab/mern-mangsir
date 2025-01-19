import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet, } from 'react-router'

const Home = () => {
  return (
    <div>

      <Header />

      <h1 className='text-2xl font-bold'>This is Home Page</h1>


      <NavLink to={'/page1'}>Page1</NavLink>
      <NavLink to={'/page2'}>Page2</NavLink>

      <Outlet />


    </div>
  )
}

export default Home
