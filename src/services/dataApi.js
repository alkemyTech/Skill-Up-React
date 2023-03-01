import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UserKey } from '../store/states/user';

export const dataApi = createApi({
    reducerPaths: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com',
        prepareHeaders: (headers) => {
            const { token } = JSON.parse(localStorage.getItem(UserKey));

            headers.set('authorization', `Bearer ${token}`);
            return headers;
        }
    }),
    tagTypes: ['Transactions', 'Money'],
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => '/auth/me'
        }),
        // getUser: builder.query({
        //     query: (id) => `/users/${id}`
        // }),
        getAccount: builder.query({
            query: () => '/accounts/me',
            providesTags: ['Money']
        }),
        getTransactions: builder.query({
            query: (page) => `/transactions/?page=${page}`,
            providesTags: ['Transactions']
        }),
        getTransaction: builder.query({
            query: (id) => `/transactions/${id}`
        }),
        newAccount: builder.mutation({
            query: () => ({
                url: '/accounts',
                method: 'POST',
                body: {
                    money: 150,
                    isBlocked: 'false'
                }
            })
        }),
        depositCash: builder.mutation({
            query: ({ id, concept, amount }) => ({
                url: `/accounts/${id}`,
                method: 'POST',
                body: {
                    type: 'topup',
                    concept,
                    amount
                }
            }),
            invalidatesTags: ['Transactions', 'Money']
        }),
        newExpense: builder.mutation({
            query: ({ id, concept, amount }) => ({
                url: `/accounts/${id}`,
                method: 'POST',
                body: {
                    type: 'payment',
                    concept,
                    amount: amount * -1
                }
            }),
            invalidatesTags: ['Transactions', 'Money']
        }),
        newTransaction: builder.mutation({
            query: ({ amount, concept, date, accountId, userId, toAccountId }) => ({
                url: '/transactions',
                method: 'POST',
                body: {
                    amount,
                    concept,
                    date,
                    type: 'payment',
                    accountId,
                    userId,
                    toAccountId
                }
            })
        }),
        editTransaction: builder.mutation({
            query: ({ id, concept }) => ({
                url: `/transactions/${id}`,
                method: 'PUT',
                body: {
                    concept
                }
            })
        }),
        resetPassword: builder.mutation({
            query: ({ id, password }) => ({
                url: `/users/resetPassword/${id}`,
                method: 'PATCH',
                body: {
                    password
                }
            })
        })
    })
});

export const {
    useGetMeQuery,
    // useGetUserQuery,
    useGetAccountQuery,
    useGetTransactionsQuery,
    useGetTransactionQuery,
    useNewAccountMutation,
    useDepositCashMutation,
    useNewExpenseMutation,
    useNewTransactionMutation,
    useEditTransactionMutation,
    useResetPasswordMutation
} = dataApi;
