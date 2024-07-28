import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export const fetchPosts = createAsyncThunk('post/fetchUsers', (page) => {
    return axios
        .get(`https://dev.karemas.com/api/posts?page=${page}`)
        .then(response => response.data)
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})

export default postSlice.reducer