// import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import Wellness from "./pages/Wellness.jsx"
// import { useState } from 'react'
import './App.css'

 import SignIn from './pages/SignIn'
 import Signup from './pages/SignUp'
import Homepage from "./pages/Homepage.jsx"
// import Landing from './pages/Landing.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing  from './pages/Landing.jsx';
import Map from "./pages/Map.jsx"

const router = createBrowserRouter([
 

   {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Homepage />,  // Route for Homepage
  },
  {
    path:"/signin",
    element: <SignIn />,
  },
  {
    path:"/signup",
    element: <Signup />,
  }
,
  {
    path: "/maps",
    element: <Map />,
  },
  {
    path: "/checking",
    element: <h1>hello</h1>,
  },
  {
    path: "/wellness",
    element: <Wellness />,
  },
]);

function App() {


  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  )
}

export default App
