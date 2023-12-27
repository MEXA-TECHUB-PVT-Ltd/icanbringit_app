import React, {useEffect, useRef, useState} from 'react'
import {Image, PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import images from '../../constants/images'
import Custom_Button from '../../components/button/Custom_Button'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import RBSheet from 'react-native-raw-bottom-sheet'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../themes/colors'
import {colors} from '../../themes'
import {globalStyles as gs, globalMarginStyles as gms} from '../../styles'

const ProfilePic = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUri, setImageUri] = useState(null)
  const [selectedItem, setSelectedItem] = useState('')

  const ref_RBSheetCamera = useRef(null)
  const takePhotoFromCamera = async value => {
    setSelectedItem(value)
    launchCamera(
      {
        mediaType: 'Photo',
      },
      response => {
        if (!response.didCancel) {
          if (response.assets && response.assets.length > 0) {
            setImageUri(response.assets[0].uri)
          } else if (response.uri) {
            setImageUri(response.uri)
          }
        }
        ref_RBSheetCamera.current.close()
      },
    )
  }
  const requestCameraPermission = async () => {
    try {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'Camera Permission',
        message: 'App needs access to your camera',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      })
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(() => {
    requestCameraPermission()
  }, [])
  const choosePhotoFromLibrary = value => {
    setSelectedItem(value)
    launchImageLibrary({mediaType: 'Photo'}, response => {
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri)
      }
      ref_RBSheetCamera.current.close()
    })
  }

  return (
    <View style={gs.fill}>
      <Signin_signup_header title="Add Profile Photo" />
      <View>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => ref_RBSheetCamera.current.open()}>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              style={{width: 200, height: 200}}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={images.profilePic}
              style={{width: 200, height: 200}}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={{marginTop: '70%', alignSelf: 'center'}}>
        <Custom_Button
          title="Continue"
          load={false}
          // checkdisable={inn == '' && cm == '' ? true : false}
          customClick={() => navigation.navigate('Select_preferences')}
        />
      </View>
      <RBSheet
        ref={ref_RBSheetCamera}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 150,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.maintext}>Select an option</Text>
          <TouchableOpacity onPress={() => ref_RBSheetCamera.current.close()}>
            <Ionicons
              name="close"
              size={22}
              color={Colors.dark_charcoal}
              onPress={() => ref_RBSheetCamera.current.close()}
            />
          </TouchableOpacity>
        </View>
        <View style={[gms.mh20, gms.mt10]}>
          <TouchableOpacity
            onPress={() => takePhotoFromCamera('camera')}
            style={{flexDirection: 'row'}}>
            <Ionicons name="camera" size={25} color={Colors.primary} />
            <Text style={{color: colors.dark_charcoal, marginLeft: 10}}>Take Photo</Text>
          </TouchableOpacity>
          <View style={{height: 0.5, backgroundColor: colors.lavender, marginTop: 9}} />
          <TouchableOpacity
            onPress={() => choosePhotoFromLibrary('gallery')}
            style={{flexDirection: 'row', marginTop: 10}}>
            <MaterialCommunityIcons name="image" size={25} color={Colors.primary} />
            <Text style={{color: colors.dark_charcoal, marginLeft: 10}}>Choose a Photo</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  )
}

export default ProfilePic
