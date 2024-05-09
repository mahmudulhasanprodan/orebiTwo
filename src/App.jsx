import React from 'react'
import Home from './Pages/Home/Home'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route></Route>
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
