import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import { userSignupURL } from '../../../api/endpoints'
import axiosInstance from '../../../api/api'

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export const signupUser = createAsyncThunk('signup', async userData => {
  try {
    const response = await axiosInstance.post(userSignupURL, userData)
    return response.data
  } catch (error) {
    throw error.response.data
  }
})

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.loading = true
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false
        state.data = null
        state.error = action.error.message
      })
  },
})

export default signupSlice.reducer
