// redux/store.ts
import { productApi } from "@/features/products/productAPi";
import productFilterReducer from "@/features/products/productFilterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    productFilter: productFilterReducer, // ✅
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
