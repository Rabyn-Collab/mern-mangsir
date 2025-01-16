import React from 'react'

const getData = async () => {

  const res = await fetch('https://67831c8c8b6c7a1316f382b3.mockapi.io/todos', {
    next: {
      revalidate: 5,
    }
  });
  return res.json();
}


const ProductList = async () => {
  const data = await getData();

  return (
    <div className='p-4'>

      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.desc}</h1>
        </div>
      ))}

    </div>
  )
}

export default ProductList
