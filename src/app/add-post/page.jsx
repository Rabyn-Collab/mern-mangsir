'use client'

import axios from 'axios';
import React, { useActionState } from 'react'

const addPost = async (prev, formState) => {
  console.log(formState);

  try {

    await axios.post('https://67831c8c8b6c7a1316f382b3.mockapi.io/todos', {
      desc: formState,
      completed: false
    });
    return 'success';
  } catch (err) {
    console.log(err);
  }

}

const page = () => {

  const [result, postFunc, isPending] = useActionState(addPost, null);
  console.log(isPending);
  console.log(result);
  return (
    <div className='p-4'>

      <form action={postFunc}>
        <input className='border-2' name='desc' type="text" />
        <button type='submit'>Submit</button>

      </form>

    </div>
  )
}

export default page
