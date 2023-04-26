import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IProduct } from "@/models/product.interface";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], number>({
            query: (limit: number = 5) => ({
                url: `/products`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Post']
        }),
        updateProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: ['Post']
        }),
        deleteProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        })
    })
})