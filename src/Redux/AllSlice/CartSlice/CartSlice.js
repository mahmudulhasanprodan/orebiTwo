import { createSlice } from '@reduxjs/toolkit'
import {toast, Bounce } from 'react-toastify';



const initialState = {
    carItem: [],
    totalcartItem: 1,
    totalAmoun: 1,
  };
  

  export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers:{
       addtoCart: (state,action) =>{
         const findIndex = state.carItem.findIndex((item) => {
           
            return item.id === action.payload.id;
         });
         if(findIndex >= 0){
            state.carItem[findIndex].cartQuantity += 1;
         }else{
          state.carItem.push({...action.payload, cartQuantity: 1});
          toast.success(`${action.payload.title} Added to Cart`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
         };
       },
    },
});




// Action creators are generated for each case reducer function
export const { addtoCart} = cartSlice.actions

export default cartSlice.reducer