// import React from "react";
// import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
 import './App.css';
import Hero from './components/sections/Hero';
 import Navbar from "./components/sections/Navbar"
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route
//         index
//         element={<Home />}>
//       </Route>

//       <Route
//         path="/about"
//         element={<About />}>

//       </Route>

//       <Route
//         path="/service"
//         element={<Service />}>
//       </Route>

//       <Route
//         path="/contact"
//         element={<Contact />}>
//       </Route>
//     </Route>
//   )
// );


// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />

//     </>
//   );
// }

import React from 'react'

const App = () => {
  return ( 
   <>
    <Navbar/>
    <Hero />
   </>
  )
}

export default App


// export default App;
