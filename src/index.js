import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
// import App from './App';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout';
import Homepage from './components/home';
import Contact from './components/contact';
import Gallery from './components/gallery';
import User from './components/user';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//     element:<Homepage/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         path:"/gallery",
//         element:<Gallery/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path="" element={<Homepage/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="gallery" element={<Gallery/>}/>
    <Route path="user/:id" element={<User/>}/>
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

