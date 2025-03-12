'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useActionState } from 'react'

//19 useActionState


export default function Page() {
  const router = useRouter();

  const postAdd = async (prev, formData) => {
    try {

      await axios.post('https://67831c8c8b6c7a1316f382b3.mockapi.io/posts', {
        title: formData.get('title'),
        detail: formData.get('detail'),
        image: formData.get('image'),
      });
      router.back();

    } catch (error) {
      return 'something went wrong;'

    }
  }


  const [result, formSubmit, pending] = useActionState(postAdd, null);

  // if(!result){

  // }

  return (


    <div className='p-4'>

      <form action={formSubmit} className='space-y-5'>
        <div>
          <input
            className='border-2 px-2 focus:outline'
            placeholder='Title'
            type="text" name='title' />
        </div>
        <div>
          <input
            className='border-2 px-2 focus:outline'
            placeholder='Detail'
            type="text" name='detail' />
        </div>
        <div>
          <input
            className='border-2 px-2 focus:outline'
            placeholder='Image'
            type="text" name='image' />
        </div>




        <button
          className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer'>
          <div className='flex gap-2 items-center'>
            {pending && <div className='h-5 w-5 border-2 border-t-red-500 rounded-full animate-spin'>

            </div>}
            <span> Submit</span>
          </div>


        </button>
      </form>



      {/* <Formik
        initialValues={{
          title: '',
          detail: '',
          image: '',
        }}
        onSubmit={(val) => {
           console.log(val);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              name='title'
              onChange={handleChange}
              value={values.title}
              type="text" />

            <input
              name='detail'
              onChange={handleChange}
              value={values.detail}
              type="text" />


            <input
              name='image'
              onChange={handleChange}
              value={values.image}
              type="text" />


            <button type='submit'>Submit</button>

          </form>
        )}
      </Formik> */}

    </div>
  )
}
