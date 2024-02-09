import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	products: [],
	total: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existing = state.products.find(
				(product) => product._id === action.payload._id
			);

			if (existing) {
				existing.quantity = existing.quantity + 1;
			} else {
				state.products.push({ ...action.payload, quantity: 1 });
			}

			state.total += action.payload.price;
		},
		removeOne: (state, action) => {
			const existing = state.products.find(
				(product) => product._id === action.payload._id
			);

			if (existing && existing.quantity > 1) {
				existing.quantity = existing.quantity - 1;
			} else {
				state.products = state.products.filter(
					(product) => product._id !== action.payload._id
				);
			}

			state.total -= action.payload.price;
		},
		removeFromCart: (state, action) => {
			state.products = state.products.filter(
				(product) => product._id !== action.payload._id
			);

			state.total -= action.payload.price * action.payload.quantity;
		},
	},
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;