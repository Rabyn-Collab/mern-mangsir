import React from 'react'
import ProgramCard from './components/ProgramCard'

const App = () => {


  return (
    <div className='p-4'>

      <ProgramCard
        label={'Node.js'}
        author={'Emanuele DeilBono'}
        url={'https://plus.unsplash.com/premium_photo-1682192408471-a7cf432b3fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9kZXxlbnwwfHwwfHx8MA%3D%3D'}
      />
      <ProgramCard
        label={'React.js'}
        author={'Dmitri Nesteruk'}
        url={'https://images.unsplash.com/photo-1695121767703-3dfaf0b62d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm9kZXxlbnwwfHwwfHx8MA%3D%3D'}
      />



    </div>
  )
}

export default App
