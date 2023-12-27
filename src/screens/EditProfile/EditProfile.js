import React, {useEffect, useRef, useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
} from 'react-native'

import SettingHeader from '../../components/SettingHeader/SettingHeader'
import Colors from '../../themes/colors'
import CustomText from '../../components/Text'
import images from '../../constants/images'
import InputField from '../../components/InputFiled'
import DropDownPicker from 'react-native-dropdown-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import RBSheet from 'react-native-raw-bottom-sheet'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Custom_Button from '../../components/button/Custom_Button'
import CustomSnackbar from '../../components/CustomSnackbar/CustomSnackbar'
import {colors} from '../../themes'
import {globalStyles as gs, globalMarginStyles as gms} from '../../styles'

const EditProfile = ({navigation}) => {
  const [openItem, setOpenItem] = useState(false)

  const [loadedValue, setLoadedValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Male', value: 'item11'},
    {label: 'Female', value: 'item22'},
    {label: 'Prefer not to say', value: 'item33'},
  ])
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
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  const dismissSnackbar = () => setSnackbarVisible(true)

  const handleUpdatePassword = async () => {
    setSnackbarVisible(true)
    setTimeout(() => {
      setSnackbarVisible(false)
      navigation.navigate('Setting')
    }, 3000)
  }
  const UpdateProfile = () => handleUpdatePassword()

  return (
    <SafeAreaView style={{flexGrow: 1, paddingTop: 25, backgroundColor: Colors.white}}>
      <ScrollView>
        <SettingHeader title={'Edit Profile'} />
        <View
          style={{
            marginTop: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={images.avatar} />
          <TouchableOpacity onPress={() => ref_RBSheetCamera.current.open()}>
            <CustomText
              text={'Change Photo'}
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.primary,
                textDecorationLine: 'underline',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={[gms.mh20, gms.mt20]}>
          <CustomText text={'Full Name'} style={styles.boldText} />
          <InputField placeholder={'John Doe'} />
          <View style={gms.mt20}>
            <CustomText text={'Gender'} style={styles.boldText} />
            <DropDownPicker
              placeholder="Gender"
              open={openItem}
              value={loadedValue}
              items={items}
              setOpen={setOpenItem}
              setValue={setLoadedValue}
              setItems={setItems}
              style={{
                marginTop: 10,
                borderColor: colors.lavender,
                paddingHorizontal: 20,
              }}
            />
          </View>
          <CustomText text={'Age'} style={styles.boldText} />
          <InputField placeholder={'29'} />
          <CustomText text={'City'} style={styles.boldText} />
          <InputField placeholder={'Washington'} />
          <CustomText text={'Country'} style={styles.boldText} />
          <InputField placeholder={'United States'} />
        </View>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 40,
            bottom: 10,
          }}>
          <Custom_Button title={'Edit'} customClick={UpdateProfile} />
        </View>
      </ScrollView>
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
        <View style={[gs.row, gms.mh10]}>
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
            <MaterialCommunityIcons
              //   color={selectedItem === 'gallery' ? colors.maize : colors.taupe_grey}
              name="image"
              size={25}
              color={Colors.primary}
            />
            <Text style={{color: colors.dark_charcoal, marginLeft: 10}}>Choose a Photo</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      <CustomSnackbar
        message={'Success'}
        messageDescription={'Profile Edited successfully'}
        onDismiss={dismissSnackbar}
        visible={snackbarVisible}
      />
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  boldText: {fontWeight: 'bold', color: colors.black},
})
