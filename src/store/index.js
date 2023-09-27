import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../services/shopApi";

 const store = configureStore({
  reducer: {
    shop: shopSlice,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware)
});

setupListeners(store.dispatch)


export default store
