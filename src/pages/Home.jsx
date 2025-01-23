import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';



const Home = () => {

  const some = useState();

  const persons = ['ram', 'shyam', 'hari'];

  console.log(some);

  let count = 0;

  const increment = () => {
    count++;
    console.log(count);
  }

  return (
    <div className='p-5'>

      <Typography variant='h3'>{count}</Typography>



      <Button
        onClick={increment}
        size='sm' color='red'>Click Me</Button>


    </div>
  )
}

export default Home
