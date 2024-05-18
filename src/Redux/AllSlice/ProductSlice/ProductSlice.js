import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: "IDLE",
}

export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers:{
        setProducts: (state,payload) => {
            state.data = payload;
        },
    },
});


// Action creators are generated for each case reducer function
export const { setProducts} = ProductSlice.actions

export default ProductSlice.reducer