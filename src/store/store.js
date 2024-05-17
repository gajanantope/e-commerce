import { configureStore } from "@reduxjs/toolkit";
import cartProductReduser from "./cartProductSlice";
import productcountReduser from "./productcountSlice";
import searchReduser from "./searchSlice";
export const store = configureStore({
  reducer: {
    cartProduct: cartProductReduser,
    productCount: productcountReduser,
    search: searchReduser,
  },
});
