import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {resetPassURL} from '../../../api/endpoints'
import axiosInstance from '../../../api/api'

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export const resetPass = createAsyncThunk('resetPass', async credentials => {
  try {
    const response = await axiosInstance.put(resetPassURL, credentials)
    return response.data
  } catch (error) {
    throw error.response.data
  }
})

const resetPassSlice = createSlice({
  name: 'resetPass',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(resetPass.pending, state => {
        state.loading = true
      })
      .addCase(resetPass.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(resetPass.rejected, (state, action) => {
        state.loading = false
        state.data = null
        state.error = action.error.message
      })
  },
})

export default resetPassSlice.reducer
