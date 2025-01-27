import { faker } from '@faker-js/faker';
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer';
import { TableWithStripedRows } from '../components/TableWithStripedRows';




const Home = () => {

  const [users, setUsers] = useState([]);


  const addUser = () => {

    const newUser = {
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }
    setUsers((prev) => [...prev, newUser]);
  }




  return (
    <div className='p-5 space-y-3'>

      <Typography variant='h3'>User Listings</Typography>

      <Button
        onClick={addUser}
        size='sm' color='red'>Create Random User</Button>

      {users.length === 0 && <Typography variant='h6'>please create come users !</Typography>}



      <TableWithStripedRows users={users} />





    </div>
  )
}

export default Home
