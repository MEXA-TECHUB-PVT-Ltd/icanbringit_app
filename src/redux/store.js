import {configureStore} from '@reduxjs/toolkit'

import signinSlice from './slices/auth/signinSlice'
import signupSlice from './slices/auth/signupSlice'
import verifyOtpSlice from './slices/auth/verifyOtpSlice'
import forgotPassSlice from './slices/auth/forgotPassSlice'
import resetPassSlice from './slices/auth/resetPassSlice'

import uploadProfilePhotoSlice from './slices/onboarding/uploadProfilePhotoSlice'

const store = configureStore({
  reducer: {
    signin: signinSlice,
    signup: signupSlice,
    verifyOtp: verifyOtpSlice,
    forgotPass: forgotPassSlice,
    resetPass: resetPassSlice,
    uploadProfilePhoto: uploadProfilePhotoSlice,
  },
})

export default store
