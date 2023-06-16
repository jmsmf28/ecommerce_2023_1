import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"
import appSlice from "./appSlice"

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
})

export default store
