import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import filterReducer from './features/filter/filterSlice';
import { baseApi } from './api/baseApi';


const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		cart: cartReducer,
		filter: filterReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
	// eslint-disable-next-line no-undef
	devTools: process.env.NODE_ENV === "production",
});

export const { dispatch } = store;


export default store;