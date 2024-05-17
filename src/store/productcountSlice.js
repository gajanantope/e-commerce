import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const productCountSlice = createSlice({
  name: "productCount",
  initialState,
  reducers: {
    count: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { count } = productCountSlice.actions;

export default productCountSlice.reducer;
