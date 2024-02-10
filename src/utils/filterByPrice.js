export const filterByPrice = (product, fixedPrice) => {
	return product.price >= fixedPrice.minPrice && product.price <= fixedPrice.maxPrice;

};