// import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
// import Wellness from "./pages/Wellness"
// import Wellness from './pages/Wellness'
// import { useState } from 'react'
import './App.css'
// import Map from './pages/Map.jsx';
// import SignIn from './pages/SignIn'
// import Signup from './pages/SignUp'
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
    path: "/maps",
    element: <Map />,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {


  return (
    <>
          <RouterProvider router={router} />
    </                                                                                                                                                                                                                                                                        >
  )
}

export default App
