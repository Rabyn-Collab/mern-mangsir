import React from 'react'

const ProductList = () => {
  return (
    <div className='p-5 space-y-4'>
      {
        products.map((product) => (
          <div key={product.id} className='shadow-md p-6 cursor-pointer'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))
      }

    </div>
  )
}

export default ProductList


const products = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "Bluetooth over-ear headphones with noise cancellation.",
    "price": 99.99,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 2,
    "name": "Smartphone",
    "description": "Latest model with a high-resolution display and powerful processor.",
    "price": 799.99,
    "category": "Electronics",
    "inStock": true
  },
  {
    "id": 3,
    "name": "Gaming Chair",
    "description": "Ergonomic gaming chair with adjustable height and lumbar support.",
    "price": 199.99,
    "category": "Furniture",
    "inStock": false
  },
  {
    "id": 4,
    "name": "Running Shoes",
    "description": "Lightweight running shoes designed for comfort and durability.",
    "price": 59.99,
    "category": "Sportswear",
    "inStock": true
  },
  {
    "id": 5,
    "name": "Coffee Maker",
    "description": "Automatic coffee maker with programmable timer and multiple brew sizes.",
    "price": 49.99,
    "category": "Kitchen Appliances",
    "inStock": true
  }
];
