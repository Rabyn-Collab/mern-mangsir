import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import { RouterProvider } from 'react-router-dom';
import Page1 from './pages/home_compo/Page1';
import Page2 from './pages/home_compo/Page2';

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'page1',
          element: <Page1 />
        },
        {
          path: 'page2',
          element: <Page2 />
        }

      ]
    },

    {
      path: 'about',
      element: <About />
    }

  ]);


  return <RouterProvider router={router} />
}

export default App
