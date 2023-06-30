import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-gray-800 pt-10 h-[860px] text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
