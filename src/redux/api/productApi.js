
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PRODUCTS_URL = "/search";

export const productApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		products: build.query({
			query: ({ platform, item_id }) => ({
				url: `/${platform}/${item_id}`,
				method: "GET",

			}),
			providesTags: [tagTypes.products],
		}),

		addProduct: build.mutation({
			query: (data) => ({
				url: PRODUCTS_URL,
				method: "POST",
				data,

			}),
			invalidatesTags: [tagTypes.products],
		}),

		// get single department by id
		product: build.query({
			query: (id) => ({
				url: `${PRODUCTS_URL}/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.products],
		}),

		// update single department by id
		updateProducts: build.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.id}`,
				method: "PATCH",
				data: data.body,
			}),
			invalidatesTags: [tagTypes.products],
		}),

		// delete single department by id
		deleteProducts: build.mutation({
			query: (id) => ({
				url: `${PRODUCTS_URL}/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [tagTypes.products],
		}),
	}),
});

export const {
	useProductsQuery,
	useProductQuery,
	useAddProductMutation,
	useDeleteProductsMutation,
	useUpdateProductsMutation


} = productApi;
