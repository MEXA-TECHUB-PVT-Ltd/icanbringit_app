import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {uploadImageURL} from '../../../api/endpoints'
import axiosInstance from '../../../api/api'

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export const uploadProfilePhoto = createAsyncThunk('uploadProfilePhoto', async file => {
  try {
    const formData = new FormData()
    formData.append('file', file, file.name)

    const response = await axiosInstance.post(uploadImageURL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
    return response.data
  } catch (error) {
    console.error('Upload Failed: ', error)
    throw error.response?.data || error.message
  }
})

const uploadProfilePhotoSlice = createSlice({
  name: 'uploadProfilePhoto',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(uploadProfilePhoto.pending, state => {
        state.loading = true
      })
      .addCase(uploadProfilePhoto.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(uploadProfilePhoto.rejected, (state, action) => {
        state.loading = false
        state.data = null
        state.error = action.error.message
      })
  },
})

export default uploadProfilePhotoSlice.reducer
