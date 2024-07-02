import { createSlice } from '@reduxjs/toolkit'
import { stringify } from 'postcss';
import {toast, Bounce } from 'react-toastify';



const initialState = {
  carItem: localStorage.getItem("carItem")
    ? JSON.parse(localStorage.getItem("carItem"))
    : [],
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
            localStorage.setItem("carItem",JSON.stringify(state.carItem));
            toast.info(`${action.payload.title} Again Added`, {
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
         }else{
          const temporary = {...action.payload, cartQuantity: 1}
          state.carItem.push(temporary);
          localStorage.setItem("carItem",JSON.stringify(state.carItem));
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
       removeCaritem: (state, action) => {
          const removeItem = state.carItem.filter((item) => item.id !== action.payload.id);       
          state.carItem = removeItem;
          localStorage.setItem("carItem",JSON.stringify(state.carItem));
          toast.error(`${action.payload.title} Removed to Cart`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
       },
       IncrementQuantity: (state, action) => {
       const findIndex = state.carItem.findIndex((item) => item.id === action.payload.id)
        if(findIndex >= 0){
          state.carItem[findIndex].cartQuantity += 1;
          localStorage.setItem("carItem",JSON.stringify(state.carItem));
          toast.success(`${action.payload.title} Increment`, {
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

       DecrementQuantity: (state,action) => {
        const findIndex = state.carItem.findIndex((item) => item.id === action.payload.id)
        if(state.carItem[findIndex].cartQuantity > 1){
          state.carItem[findIndex].cartQuantity -= 1;
          localStorage.setItem("carItem",JSON.stringify(state.carItem));
          toast.error(`${action.payload.title} Decrement`, {
            position: "bottom-left",
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
       }

    },
});




// Action creators are generated for each case reducer function
export const { addtoCart,removeCaritem,IncrementQuantity,DecrementQuantity} = cartSlice.actions

export default cartSlice.reducer