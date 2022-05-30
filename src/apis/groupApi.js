import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ['Group'],
    endpoints: (builder) => ({
        getGroups: builder.query({
           query: (model) => model.search === ''
               ? `/group/${model.pageNumber}/${model.pageSize}/%default%/${model.sort}`
               : `/group/${model.pageNumber}/${model.pageSize}/${model.search}/${model.sort}`,
           providesTags: ['Group']
        }),
        addGroup: builder.mutation({
            query: (model) => ({
                url: '/group',
                method: 'POST',
                body: model,
            }),
            invalidatesTags: ['Group'],
        }),
        updateGroup: builder.mutation({
            query: (model) => ({
                url: '/group',
                method: 'PUT',
                body: model,
            }),
            invalidatesTags: ['Group'],
        }),
        getGroup: builder.query({
            query: (id) => `/group/${id}`,
        }),
        deleteGroup: builder.mutation({
            query: (id) => ({
                url: `/group/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Group'],
        })
    })
});

export const {
    useAddGroupMutation,
    useUpdateGroupMutation,
    useGetGroupQuery,
    useGetGroupsQuery,
    useDeleteGroupMutation
} = groupApi;