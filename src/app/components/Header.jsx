import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-black text-white px-5 py-2 items-end justify-between'>

      <h1 className='text-2xl'>Next App</h1>
      <nav className='space-x-5'>
        <Link href={'/products'}>Products</Link>
        <Link href={'/about'}>About</Link>
      </nav>

    </div>
  )
}

export default Header


