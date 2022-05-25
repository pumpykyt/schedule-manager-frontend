import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const scheduleApi = createApi({
    reducerPath: 'scheduleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ['Schedule'],
    endpoints: (builder) => ({
        getSchedules: builder.query({
           query: (model) => model.search === ''
               ? `/schedule/${model.pageNumber}/${model.pageSize}/%default%/${model.sort}`
               : `/schedule/${model.pageNumber}/${model.pageSize}/${model.search}/${model.sort}`,
           providesTags: ['Schedule']
        }),
        addSchedule: builder.mutation({
            query: (model) => ({
                url: '/schedule',
                method: 'POST',
                body: model,
            }),
            invalidatesTags: ['Schedule'],
        }),
        updateSchedule: builder.mutation({
            query: (model) => ({
                url: '/schedule',
                method: 'PUT',
                body: model,
            }),
            invalidatesTags: ['Schedule'],
        }),
        getSchedule: builder.query({
            query: (id) => `/schedule/${id}`,
        }),
        deleteSchedule: builder.mutation({
            query: (id) => ({
                url: `/schedule/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Schedule'],
        })
    })
});

export const {
    useAddScheduleMutation,
    useUpdateScheduleMutation,
    useGetScheduleQuery,
    useGetSchedulesQuery,
    useDeleteScheduleMutation
} = scheduleApi;