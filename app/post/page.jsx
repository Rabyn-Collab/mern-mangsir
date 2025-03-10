import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function Page() {
  const response = await axios.get('https://67831c8c8b6c7a1316f382b3.mockapi.io/posts');
  const posts = response.data;
  return (
    <div className='p-5 space-y-5'>

      <h1>Post Pages</h1>
      <div className='space-y-4'>
        {posts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            key={post.id} className='shadow p-3 cursor-pointer block'>
            <h2>{post.title}</h2>
            <img src="https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="" />
            {/* <Image
              height={200}
              width={200}
              src='https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8' alt='image'
              className='py-3'
            /> */}
            <p>{post.detail}</p>
          </Link>
        ))}
      </div>


    </div>
  )
}
