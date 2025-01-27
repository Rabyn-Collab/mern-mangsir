import { faker } from '@faker-js/faker';
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';
import { TableWithStripedRows } from '../components/TableWithStripedRows';




const Home = () => {

  const [users, setUsers] = useState([]);


  const addUser = () => {

    const newUser = {
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }
    setUsers((prev) => [...prev, newUser]);
  }

  const comments = [
    {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 242,
      "likes": 3,
      "user": {
        "id": 105,
        "username": "emmac",
        "fullName": "Emma Wilson"
      }
    },
    {
      "id": 2,
      "body": "What terrific math skills you're showing!",
      "postId": 46,
      "likes": 4,
      "user": {
        "id": 183,
        "username": "cameronp",
        "fullName": "Cameron Perez"
      }
    },
    {
      "id": 3,
      "body": "You are an amazing writer!",
      "postId": 235,
      "likes": 2,
      "user": {
        "id": 1,
        "username": "emilys",
        "fullName": "Emily Johnson"
      }
    },
  ]

  const quotes = [
    {
      "id": 1,
      "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      "author": "Rumi"
    },
    {
      "id": 2,
      "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      "author": "Abdul Kalam"
    },
    {
      "id": 3,
      "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
      "author": "Abdul Kalam"
    },
    {
      "id": 4,
      "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
      "author": "Bill Gates"
    },
    {
      "id": 5,
      "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      "author": "Rumi"
    },
    {
      "id": 6,
      "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
      "author": "Abu Bakr (R.A)"
    },
  ];

  // const numbers = [
  //   { id: 1, name: 'one' },
  //   { id: 2, name: 'two' },
  // ];

  // const g = numbers.filter((num) => num.id !== 1);
  // console.log(g);




  return (
    <div className='p-5 space-y-3'>

      <Typography variant='h3'>User Listings</Typography>

      <Button
        onClick={addUser}
        size='sm' color='red'>Create Random User</Button>

      {users.length === 0 && <Typography variant='h6'>please create come users !</Typography>}



      <TableWithStripedRows users={users} setUsers={setUsers} />





    </div>
  )
}

export default Home
