import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IUser } from "../../interfaces";

export const usersApi = createApi({
  reducerPath: "users/api",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (build) => ({
    getAllUsers: build.query<IUser[], void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["User"],
    }),
    getOneUser: build.query<IUser, number>({
      query: (userId) => `/users/${userId}`,
      providesTags: (_result, _error, id) => [{ type: "User", id }],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetOneUserQuery } = usersApi;
