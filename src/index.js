import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
// import App from './App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout';
import Homepage from './components/home';
import Contact from './components/contact';
import Gallery from './components/gallery';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
    element:<Homepage/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/gallery",
        element:<Gallery/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

