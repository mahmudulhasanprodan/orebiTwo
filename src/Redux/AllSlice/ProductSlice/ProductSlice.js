import { createSlice } from '@reduxjs/toolkit'

const ApiStatus = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    ERROR: "ERROR",
}

const initialState = {
  data: [],
  status: ApiStatus.IDLE,
}

export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers:{
        setProducts: (state, payload) => {
            state.data = payload;
        },
        SetStatus: (state, payload) => {
            state.status = payload;
        },
    },
});

//make a thunk function for getting data 

export const FetcherProduct = (apiUrl) => {
  return async function GetProduct(dispatch, getstate) {
    try {
        dispatch(SetStatus(ApiStatus.LOADING));
      const response = await fetch(apiUrl);
      const data = await response.json();
      dispatch(setProducts(data))
      dispatch(SetStatus(ApiStatus.IDLE));
    } catch (error) {
      dispatch(SetStatus(ApiStatus.ERROR));
      console.log(error);
    }
  };
};

// Action creators are generated for each case reducer function
export const { setProducts, SetStatus} = ProductSlice.actions

export default ProductSlice.reducer