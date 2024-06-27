import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../AllSlice/ProductSlice/ProductSlice'
import  addtoCart  from '../AllSlice/CartSlice/CartSlice';

export const store = configureStore({
  reducer: {
    Cart: addtoCart,
    products: ProductSlice,
  },
});