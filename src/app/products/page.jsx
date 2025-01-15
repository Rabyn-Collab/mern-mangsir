import axios from 'axios';
import Link from 'next/link';
import React from 'react'






async function getData() {
  const res = await axios.get('https://dummyjson.com/products');
  return res.data;
}

const ProductList = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className='p-5 space-y-4'>
      {
        data && data.products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className='shadow-md p-6 cursor-pointer'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </Link>
        ))
      }

    </div>
  )
}

export default ProductList
