import React from 'react'
import Home from './Pages/Home/Home'
import RootElement from './CommonComponent/RootElement/RootElement';
import Shop from './Pages/Shop/Shop';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />}>
      <Route index element={<Home />}></Route>
      <Route path="/Shop" element={<Shop />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App
