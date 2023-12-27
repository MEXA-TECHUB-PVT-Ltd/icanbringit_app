import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {userLoginURL} from '../../../api/endpoints'
import axiosInstance from '../../../api/api'

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export const signinUser = createAsyncThunk('signin', async credentials => {
  try {
    const response = await axiosInstance.post(userLoginURL, credentials)
    return response.data
  } catch (error) {
    throw error.response.data
  }
})

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signinUser.pending, state => {
        state.loading = true
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false
        state.data = null
        state.error = action.error.message
      })
  },
})

export default signinSlice.reducer
