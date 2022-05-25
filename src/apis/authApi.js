import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (model) => ({
        url: '/auth/login',
        method: "POST",
        body: model,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerUser: builder.mutation({
        query: (model) => ({
          url: '/auth/register',
          method: "POST",
          body: model,
        }),
        invalidatesTags: ['Auth'],
      }),
  })
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation
} = authApi;