import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Card from './pages/card'
import Slot from './pages/slot'
import Slot2 from './pages/slot2'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'card',
    element: <Card/>
  },
  {
    path: 'slot',
    element: <Slot/>
  },
  {
    path: 'slot2',
    element: <Slot2/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
