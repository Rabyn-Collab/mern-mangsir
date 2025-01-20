import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,

        },
        {
          path: 'about',
          element: <About />
        }

      ]
    },



  ]);


  return <RouterProvider router={router} />
}

export default App
