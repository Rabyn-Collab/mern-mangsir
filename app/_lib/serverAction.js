'use server';

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function postData(val) {
  try {
    await axios.post('https://67831c8c8b6c7a1316f382b3.mockapi.io/posts', val);
  } catch (err) {
    return { error: 'something went wrong' };
  }

  revalidatePath('/post');
  redirect('/post');


}


export async function removeData(id) {
  try {
    await axios.delete(`https://67831c8c8b6c7a1316f382b3.mockapi.io/posts/${id}`);
  } catch (err) {

    return { error: 'something went wrong' };
  }

  revalidatePath('/post');


}