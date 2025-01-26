import { faker } from '@faker-js/faker';
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer';



const recipes = [
  {
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,

  },
  {
    "id": 2,
    "name": "Vegetarian Stir-Fry",
    "ingredients": [
      "Tofu, cubed",
      "Broccoli florets",
      "Carrots, sliced",
      "Bell peppers, sliced",
      "Soy sauce",
      "Ginger, minced",
      "Garlic, minced",
      "Sesame oil",
      "Cooked rice for serving"
    ],
    "instructions": [
      "In a wok, heat sesame oil over medium-high heat.",
      "Add minced ginger and garlic, sauté until fragrant.",
      "Add cubed tofu and stir-fry until golden brown.",
      "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
      "Pour soy sauce over the stir-fry and toss to combine.",
      "Serve over cooked rice."
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Medium",
    "cuisine": "Asian",
    "caloriesPerServing": 250,
    "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
    "rating": 4.7,
  },
]




const photos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
];



const Home = () => {

  const [users, setUsers] = useState([]);




  const addUser = () => {

    const newUser = {
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      birthdate: faker.date.birthdate(),
    }


  }


  const persons = [
    { id: 1, name: 'ram' },
    { id: 2, name: 'shyam' },
  ];



  return (
    <div className='p-5 space-y-3'>

      <Typography variant='h3'>User Listings</Typography>

      <Button
        onClick={addUser}
        size='sm' color='red'>Create Random User</Button>


      {
        persons.map((person) => {
          return <div key={person.id}>


          </div>


        })
      }


      <Footer />


    </div>
  )
}

export default Home
