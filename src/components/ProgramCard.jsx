import React from 'react'

const ProgramCard = ({ label, author, url }) => {

  return (
    <div className='font-semibold  w-[300px] shadow-lg p-2'>
      <img className='h-[220px]' src={url} alt="" />
      <div className='space-y-2 mt-3'>
        <h1>{label}</h1>
        <p>{author}</p>
        <p className='line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nobis dolorum repudiandae omnis iure autem culpa Lorem ipsum dolor sit amet consectetur adipisicing </p>
      </div>

    </div>
  )
}

export default ProgramCard
