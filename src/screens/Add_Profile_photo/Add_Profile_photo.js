import React, {useState, useRef} from 'react'
import {SafeAreaView, ScrollView, StatusBar, Image, View, TouchableOpacity} from 'react-native'

import {Text, Divider} from 'react-native-paper'
import RBSheet from 'react-native-raw-bottom-sheet'
import FlashMessage, {showMessage} from 'react-native-flash-message'
import ImagePicker from 'react-native-image-crop-picker'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import CustomButton from '../../components/button/Custom_Button'
import styles from './styles'

import Profile from '../../assets/svgs/Profile.svg'
import Gallery from '../../assets/svgs/gallary.svg'
import Camera from '../../assets/svgs/camera.svg'

import {globalPaddingStyles, globalStyles} from '../../styles'
import {colors} from '../../themes'

import {useDispatch, useSelector} from 'react-redux'
import {uploadProfilePhoto} from '../../redux/slices/onboarding/uploadProfilePhotoSlice'

function SignIn({navigation, route}) {
  const userInfo = route.params

  const dispatch = useDispatch()
  const state = useSelector(state => state.uploadProfilePhoto)
  const [image, setImage] = useState(null)

  const takePhotoFromCamera = async () => {
    const data = await ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: false,
      mediaType: 'photo',
      compressImageQuality: 0.8,
    })
      .then(img => {
        const imageFile = {
          height: img.height,
          width: img.width,
          mime: img.mime,
          uri: img.path,
        }
        setImage(imageFile)
      })
      .catch(error => console.log('Image picker error[Camera]:', error))
  }
  const takePhotoFromGallery = async () => {
    const data = await ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: false,
      mediaType: 'photo',
      compressImageQuality: 0.8,
    })
      .then(img => {
        const imageFile = {
          name: img.path.split('/').pop(),
          height: img.height,
          width: img.width,
          mime: img.mime,
          uri: img.path,
        }
        setImage(imageFile)
      })
      .catch(error => console.log('Image picker error[Gallery]:', error))
  }
  const refRBSheet = useRef()
  const optionsv = item => refRBSheet.current.open()

  const onSubmit = () => {
    if (image?.uri) {
      dispatch(uploadProfilePhoto(image))
      navigation.navigate('Add_Location', {...userInfo, profile_pic_id: ''})
    } else {
      showMessage({
        message: 'Error',
        description: 'Add profile photo to continue',
        type: 'danger',
      })
    }
  }

  return (
    <SafeAreaView style={globalStyles.fill}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
        <View style={styles.mainView}>
          <Signin_signup_header title="Add Profile Photo" />
          <View style={styles.avatarContainer}>
            <View style={styles.v1}>
              {image?.uri ? (
                <Image source={{uri: image.uri}} style={styles.upload} resizeMode={'stretch'} />
              ) : (
                <View style={styles.v}>
                  <Profile />
                </View>
              )}
            </View>
            <Text onPress={optionsv} style={styles.txt1}>
              {image?.uri == '' ? 'Add Photo' : 'Change Photo'}
            </Text>
          </View>

          <FlashMessage position="top" />
          <View style={styles.btnContainer}>
            <CustomButton title="Continue" load={false} customClick={onSubmit} />
          </View>
        </View>
      </ScrollView>

      {/* ------------------RBSheet for image---------------- */}

      <RBSheet
        ref={refRBSheet}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: colors.white,
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: '25%',
            backgroundColor: colors.white,
          },
        }}>
        <View style={globalPaddingStyles.p20}>
          <View style={styles.rbview}>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <MaterialIcons name="close" size={24} color={colors.black} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              takePhotoFromCamera()
              refRBSheet.current.close()
            }}
            style={styles.smIcon}>
            <Camera />
            <Text style={styles.txtimg}>Take a Photo</Text>
          </TouchableOpacity>

          <Divider style={styles.divider} />

          <TouchableOpacity
            onPress={() => {
              takePhotoFromGallery()
              refRBSheet.current.close()
            }}
            style={styles.smIcon}>
            <Gallery />
            <Text style={styles.txtimg}>Choose a Photo</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default SignIn
