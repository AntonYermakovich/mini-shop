import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type ICategory } from "./category.types";

interface CreateCategoryRequest {
  name: string;
  image?: string;
}

interface UpdateCategoryRequest {
  id: number;
  name?: string;
  image?: string;
}

export const categoryApi = createApi({
  reducerPath: "category/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    getAllCategories: build.query<ICategory[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),
    getOneCategory: build.query<ICategory, number>({
      query: (categoryId) => `/categories/${categoryId}`,
      providesTags: (_result, _error, id) => [{ type: "Category", id }],
    }),
    createCategory: build.mutation<ICategory, CreateCategoryRequest>({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: build.mutation<ICategory, UpdateCategoryRequest>({
      query: ({ id, ...patch }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Category", id },
        "Category",
      ],
    }),
    deleteCategory: build.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetOneCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
