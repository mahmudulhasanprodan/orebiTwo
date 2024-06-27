import { createSlice } from '@reduxjs/toolkit'


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
        console.log(state,action);
       }
    },
});




// Action creators are generated for each case reducer function
export const { addtoCart} = cartSlice.actions

export default cartSlice.reducer