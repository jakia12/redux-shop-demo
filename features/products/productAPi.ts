import { Product } from "@/types/product.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    // features/products/productApi.ts
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),

    getCategories: builder.query<string[], void>({
      query: () => "products/categories",
    }),
    getTopRated: builder.query<Product[], void>({
      query: () => "products?sort=desc&limit=4",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetTopRatedQuery,
  useGetProductByIdQuery, // 👈 add this
} = productApi;
