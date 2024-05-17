import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = searchSlice.actions;

export default searchSlice.reducer;
