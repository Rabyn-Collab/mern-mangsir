import React from 'react'

const ProductItem = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h1>Product Item</h1>

    </div>
  )
}

export default ProductItem
