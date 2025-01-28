import React from 'react'
import { movies } from '../data/data'

const Home = () => {


  return (
    <div className='grid grid-cols-4 gap-4 p-5'>

      {
        movies.results.map(({ name, id, poster_path, overview, vote_average, backdrop_path, }) => {

          return <div key={id}>
            <img


              src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />

          </div>

        })
      }

    </div>
  )
}

export default Home
