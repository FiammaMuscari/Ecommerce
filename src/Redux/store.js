import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Redux/Product/ProductSlice";
import CartReducer from "../Redux/Cart/CartSlice";
import WishListReducer from "../Redux/wishlist/WishListSlice";
import authSlice from "../Redux/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishListReducer,
    auth: authSlice,
  },
});
