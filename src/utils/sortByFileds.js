export const sortByFileds = (a, b, sortBy, sortOrder) => {
	const fieldA = a[sortBy];
	const fieldB = b[sortBy];

	if (sortOrder === 'asc') {
		return typeof fieldA === 'number'
			? fieldA - fieldB
			: fieldA.localeCompare(fieldB);
	} else {
		return typeof fieldB === 'number'
			? fieldB - fieldA
			: fieldB.localeCompare(fieldA);
	}
};
