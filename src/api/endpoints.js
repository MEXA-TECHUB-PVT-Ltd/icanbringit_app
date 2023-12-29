import {isIos} from '../utils/helpers/Dimensions'

export const BASE_URL = process.env.BASE_API_URL
export const googleMapApiKey = process.env.GOOGLE_MAPS_API_KEY
export const LOCAL_URL = isIos ? 'http://localhost' : 'http://10.0.2.2'
export const googleMapsApiURL = 'https://maps.googleapis.com/maps/api/geocode/'

/* ----------------------------A U T H----------------------------*/

export const userLoginURL = 'users/signIn'
export const userSignupURL = 'users/create'
export const verifyOtpURL = 'users/verify_otp'
export const forgotPassURL = 'users/forgotPassword'
export const resetPassURL = 'users/resetPassword'

/* ----------------------O N B O A R D I N G----------------------*/

export const uploadImageURL = 'uploads/cloudinary'
