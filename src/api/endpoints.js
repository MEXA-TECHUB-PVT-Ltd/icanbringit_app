import {isIos} from '../utils/helpers/Dimensions'

export const BASE_URL = 'https://icanbringit-be.mtechub.com/api/'
export const LOCAL_URL = isIos ? 'http://localhost' : 'http://10.0.2.2'

/* ----------------------------A U T H----------------------------*/

export const userLoginURL = 'users/signIn'
export const userSignupURL = 'users/create'
export const verifyOtpURL = 'users/verify_otp'
export const forgotPassURL = 'users/forgotPassword'
export const resetPassURL = 'users/resetPassword'

/* ----------------------O N B O A R D I N G----------------------*/

export const uploadImage = 'uploads/cloudinary'
