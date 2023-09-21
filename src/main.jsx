import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Indusrty from './Industry/Indusrty.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
    children: [
      {
       path:'/',
       element:<Home/>
      },
      {
        path: '/header',
        element:<Header/>,
      },
      {
        path:'/industry',
        element: <Indusrty/>,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
