export const filterByPrice = (product, productPrice) => {
	return product.price >= productPrice.minPrice && product.price <= productPrice.maxPrice;

};