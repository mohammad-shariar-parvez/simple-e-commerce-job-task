import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	fixedPrice: {
		minPrice: 0,
		maxPrice: 9000,
	},

	searchPrice: {
		minPrice: null,
		maxPrice: null,
	},

	reviewCount: null,
	reviewAverage: null,
	sortBy: 'price',
	sortOrder: 'desc',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		updateFixedPrice: (state, action) => {
			// const { maxPrice, minPrice } = action.payload;
			state.fixedPrice = action.payload;
		},
		setSearchPrice: (state, action) => {
			state.searchPrice = action.payload;
		},

		updateSortOption: (state, action) => {
			const { sortBy, sortOrder } = action.payload;
			state.sortBy = sortBy;
			state.sortOrder = sortOrder;
		},


	},
});

export const { updateFixedPrice, setSearchPrice, updateSortOption } = filterSlice.actions;

export default filterSlice.reducer;