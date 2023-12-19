import {isIos} from '@src/utils/helpers/Dimensions'

export const BASE_URL = 'https://app-backend.beforevault.com/login/apis/'
export const LOCAL_URL = isIos ? 'http://localhost' : 'http://10.0.2.2'

/* ----------------------------A U T H----------------------------*/

export const userLoginURL = `${BASE_URL}/api/authentication/login`