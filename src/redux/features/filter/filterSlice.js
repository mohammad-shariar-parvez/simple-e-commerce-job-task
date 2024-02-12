import { createSlice } from '@reduxjs/toolkit';
import { filterByPrice } from '../../../utils/filterByPrice.js';
import { sortByFileds } from '../../../utils/sortByFileds.js';

const initialState = {
	productPrice: {
		minPrice: 0,
		maxPrice: Infinity,
	},
	reviewCount: null,
	reviewAverage: null,
	sortBy: 'price',
	sortOrder: 'desc',
	searchTerm: 'shirt',
	totalProducts: [],
	filteredProducts: [],
	slider: false
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		updateProducts: (state, action) => {
			state.totalProducts = action.payload;
			//Don't use method chainnig here 
			const filteredProducts = action.payload.filter((product) =>
				filterByPrice(product, state?.productPrice)
			);
			const sortedProducts = filteredProducts.sort((a, b) =>
				sortByFileds(a, b, state.sortBy, state.sortOrder)
			);
			state.filteredProducts = sortedProducts;
		},

		updateProductPrice: (state, action) => {
			//filter in total products
			state.productPrice = action.payload;
			state.filteredProducts = state.totalProducts.filter((product) =>
				filterByPrice(product, action.payload)
			);
		},

		updateSortOption: (state, action) => {
			//Sort on filtered products
			const { sortBy, sortOrder } = action.payload;
			state.sortBy = sortBy;
			state.sortOrder = sortOrder;
			state.filteredProducts = state.filteredProducts.sort((a, b) =>
				sortByFileds(a, b, state.sortBy, state.sortOrder)
			);
		},

		updateSearchTerm: (state, action) => {
			const { searchQuery } = action.payload;
			state.searchTerm = searchQuery;
		},

		resetSearchTerm: (state) => {
			state.searchTerm = 'shirt';
		},

		sliderChange: (state) => {
			state.slider = !state.slider;
		},
	},
});

export const {
	updateProductPrice,
	updateSortOption,
	updateSearchTerm,
	resetSearchTerm,
	updateProducts,
	sliderChange
} = filterSlice.actions;

export default filterSlice.reducer;
