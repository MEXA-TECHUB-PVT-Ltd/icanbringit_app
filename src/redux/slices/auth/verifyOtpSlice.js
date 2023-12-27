import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import { verifyOtpURL } from '../../../api/endpoints'
import axiosInstance from '../../../api/api'

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export const verifyOtp = createAsyncThunk('verifyOtp', async credentials => {
  try {
    const response = await axiosInstance.post(verifyOtpURL, credentials)
    return response.data
  } catch (error) {
    throw error.response.data
  }
})

const verifyOtpSlice = createSlice({
  name: 'verifyOtp',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(verifyOtp.pending, state => {
        state.loading = true
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false
        state.data = null
        state.error = action.error.message
      })
  },
})

export default verifyOtpSlice.reducer
