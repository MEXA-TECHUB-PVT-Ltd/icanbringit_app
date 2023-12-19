import {Platform} from 'react-native'
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions'

const PermissionsHelper = {
  checkPermission: async permission => {
    try {
      const result = await request(permission)
      return result === RESULTS.GRANTED
    } catch (error) {
      console.error(`Error checking ${permission} permission:`, error)
      return false
    }
  },

  requestCameraPermission: async () => {
    const permission = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    })
    const granted = await PermissionsHelper.checkPermission(permission)

    if (!granted) {
      try {
        const result = await request(permission)
        return result === RESULTS.GRANTED
      } catch (error) {
        console.error('Error requesting camera permission:', error)
        return false
      }
    }
    return true
  },

  requestStoragePermission: async () => {
    const permission = Platform.select({
      android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    })
    const granted = await PermissionsHelper.checkPermission(permission)
    if (!granted) {
      try {
        const result = await request(permission)
        return result === RESULTS.GRANTED
      } catch (error) {
        console.er('Error requesting storage permission:', error)
        return false
      }
    }
    return true
  },

  requestCameraAndStoragePermissions: async () => {
    const cameraGranted = await PermissionsHelper.requestCameraPermission()
    const storageGranted = await PermissionsHelper.requestStoragePermission()

    return cameraGranted && storageGranted
  },
}

export default PermissionsHelper
