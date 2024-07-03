import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../AllSlice/ProductSlice/ProductSlice'
import  addtoCart, {GetTotal} from '../AllSlice/CartSlice/CartSlice';


export const store = configureStore({
  reducer: {
    Cart: addtoCart,
    products: ProductSlice,
  },
});

store.dispatch(GetTotal());