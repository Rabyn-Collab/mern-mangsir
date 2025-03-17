'use client';

import React, { useTransition } from 'react'
import { removeData } from '../_lib/serverAction';
import toast from 'react-hot-toast';

export default function RemoveButton({ id }) {
  const [pending, setTransition] = useTransition();

  const handleRemove = () => {
    setTransition(async () => {
      const { error } = await removeData(id);
      if (error) {
        toast.error(error, { position: 'top-center' });
      }
    });


  }
  return (
    <div className='flex justify-end'>
      {pending ? <h1>Removing....</h1> : <button onClick={handleRemove}>Remove Post</button>}
    </div>
  )
}
