import React from 'react'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-grid-3 items-center '>
      <div className='h-[400px]'>
        <dotlottie-player
          src="https://lottie.host/ad074b92-eb74-44a8-a48f-4b335850f88c/OTTisY2eAN.lottie"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className=' space-y-2'>
        <h1 className='text-3xl font-bold'>Hi, I am John </h1>

        <p className='text-pink-500'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam</p>
      </div>

    </div >
  )
}

export default DisplaySection
