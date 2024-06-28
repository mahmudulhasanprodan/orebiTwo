import React from 'react'
import Home from './Pages/Home/Home'
import RootElement from './CommonComponent/RootElement/RootElement';
import Shop from './Pages/Shop/Shop';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Registration from './Pages/Registration/Registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';

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
      <Route
        path="/products-details/:productId"
        element={<ProductDetails />}
      ></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    <Route path="/registration" element={<Registration />}></Route>,
    </Route>,
  ),
);

const App = () => {
  return (
    <>
       <ToastContainer />
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App
