import { IInitialState } from "@/models/user.interface"
import { createSlice } from "@reduxjs/toolkit"
import { checkAuth, login, logout, register } from "./user.actions"
import { getStoreLocal } from "@/utils/local-storage"

const initialState: IInitialState = {
    user: getStoreLocal('user'),
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.user = payload.data.user
        })
        builder.addCase(register.rejected, state => {
            state.isLoading = false
        })
        builder.addCase(login.pending, state => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.user = payload.data.user
        })
        builder.addCase(login.rejected, state => {
            state.isLoading = false
            state.user = null
        })
        builder.addCase(logout.fulfilled, state => {
            state.isLoading = false
            state.user = null
        })
        builder.addCase(checkAuth.fulfilled, (state, {payload}) => {
            state.user = payload.data.user
        })


    }
})
