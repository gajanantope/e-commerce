import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartProductSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeProduct: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { add, removeProduct } = cartProductSlice.actions;

export default cartProductSlice.reducer;
