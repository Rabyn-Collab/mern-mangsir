import React from 'react'

const ProductDetail = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);


  return (
    <div>

      <h1>hello jee</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, officia laboriosam! Neque ratione consectetur aliquam! Saepe delectus et, dignissimos excepturi cum blanditiis porro expedita quaerat asperiores ipsum iste id deserunt?</p>

    </div>
  )
}

export default ProductDetail
