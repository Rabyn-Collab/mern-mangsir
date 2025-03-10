import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-black text-white p-4 flex items-end  justify-between'>

      <h1>Next App</h1>

      <nav className='space-x-5'>

        <Link href={"/post"}>Posts</Link>
        <Link href={"/meal"}>Meals</Link>

      </nav>

    </div>
  )
}
