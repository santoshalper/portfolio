import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css'

import App from './App'
import AboutMe from './pages/aboutme'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Resume from './pages/resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Resume',
        element: <Resume />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
