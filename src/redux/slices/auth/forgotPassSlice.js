import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {forgotPassURL} from '../../../api/endpoints'
import axiosInstance from '../../../api/api'

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export const forgotPass = createAsyncThunk('forgotPass', async email => {
  try {
    const response = await axiosInstance.post(forgotPassURL, email)
    return response.data
  } catch (error) {
    throw error.response.data
  }
})

const forgotPassSlice = createSlice({
  name: 'forgotPass',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(forgotPass.pending, state => {
        state.loading = true
      })
      .addCase(forgotPass.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(forgotPass.rejected, (state, action) => {
        state.loading = false
        state.data = null
        state.error = action.error.message
      })
  },
})

export default forgotPassSlice.reducer
