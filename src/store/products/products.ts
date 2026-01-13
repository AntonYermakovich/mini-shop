import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "../../interfaces";
import type { IProductsFilters } from "../../interfaces";

interface CreateProductRequest {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

interface UpdateProductRequest {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  categoryId?: number;
  images?: string[];
}

export const productsApi = createApi({
  reducerPath: "products/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], IProductsFilters | undefined>({
      query: (filters) => ({
        url: `/products`,
        params: {
          ...(filters?.categoryId && { categoryId: filters.categoryId }),
          // ...(filters?.minPrice && { price_min: filters.minPrice }),
          // ...(filters?.maxPrice && { price_max: filters.maxPrice }),
        },
      }),
      providesTags: ["Product"],
    }),
    getOneProduct: build.query<IProduct, number>({
      query: (productId) => `/products/${productId}`,
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
    createProduct: build.mutation<IProduct, CreateProductRequest>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: build.mutation<IProduct, UpdateProductRequest>({
      query: ({ id, ...patch }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Product", id },
        "Product",
      ],
    }),
    deleteProduct: build.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
