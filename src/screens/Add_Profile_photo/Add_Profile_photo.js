import React, {useState, useEffect, useRef} from 'react'
import {SafeAreaView, ScrollView, StatusBar, Image, View, TouchableOpacity} from 'react-native'
import {Text, Divider} from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RBSheet from 'react-native-raw-bottom-sheet'

import CustomButton from '../../components/button/Custom_Button'
import FlashMessage, {showMessage} from 'react-native-flash-message'
import ImagePicker from 'react-native-image-crop-picker'
import Signin_signup_header from '../../components/button/Signin_signup_header'
import styles from './styles'

import Profile from '../../assets/svgs/Profile.svg'
import Gallery from '../../assets/svgs/gallary.svg'
import Camera from '../../assets/svgs/camera.svg'

function SignIn({navigation}) {
  const [image, setImage] = useState('')

  const takePhotoFromCamera = async () => {
    const data = await ImagePicker.openCamera({
      width: 500,
      height: 500,
      // cropping: true,
    }).then(imageDetail => {
      // console.log(imageDetail)
      // console.log(imageDetail.path.split('/').pop())

      // setfilename(imageDetail.path.split('/').pop())
      // seturi(imageDetail.path)
      // setmimeType(imageDetail.mime)
      // console.log('-----' + imageDetail)
      // console.log(uri + '--' + filename + '--' + mimeType)

      // let profileImageObj = {
      //     uri: uri,
      //     name: filename,
      //     type: mimeType,
      // };
      setImage({
        uri: imageDetail.path,
      })
    })
  }
  const takePhotoFromGallery = async () => {
    // console.warn('gallery')
    const data = await ImagePicker.openPicker({
      width: 500,
      height: 500,
    }).then(imageDetail => {
      console.log(imageDetail)
      console.log(imageDetail.path.split('/').pop())

      // setfilename(imageDetail.path.split('/').pop())
      // seturi(imageDetail.path)
      // setmimeType(imageDetail.mime)
      // console.log('-----' + imageDetail)
      // console.log(uri + '--' + filename + '--' + mimeType)

      // let profileImageObj = {
      //     uri: uri,
      //     name: filename,
      //     type: mimeType,
      // };
      setImage({
        uri: imageDetail.path,
      })
    })
  }
  const refRBSheet = useRef()
  const optionsv = item => {
    refRBSheet.current.open()
  }
  useEffect(() => {}, [])
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <Signin_signup_header title="Add Profile Photo" />
          <View style={{marginHorizontal: '7%', marginTop: '0%'}}>
            <View style={styles.v1}>
              {
                //null ni ha to image ko dekhana ha
                image ? (
                  <Image source={image} style={styles.upload} resizeMode={'stretch'} />
                ) : (
                  <View style={styles.v}>
                    <Profile />
                  </View>
                )
              }
            </View>
            <Text
              onPress={() => {
                optionsv()
              }}
              style={styles.txt1}>
              {image == '' ? 'Add Photo' : 'Change Photo'}
            </Text>
          </View>

          <FlashMessage position="top" />
          <View style={{alignSelf: 'center', marginTop: '80%', marginBottom: '5%'}}>
            <CustomButton
              title="Continue"
              load={false}
              // checkdisable={inn == '' && cm == '' ? true : false}
              customClick={() => {
                if (image == '') {
                  showMessage({
                    message: 'Error',
                    description: 'Add profile photo to continue',
                    type: 'danger',
                  })
                } else {
                  navigation.navigate('Add_Location')
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
      {/* ------------------RBSheet for image---------------- */}

      <RBSheet
        ref={refRBSheet}
        // closeOnDragDown={true}
        // closeOnPressMask={false}
        // animationType="fade"
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: '#ffff',
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: '25%',
            backgroundColor: 'white',
          },
        }}>
        <View style={{padding: 20}}>
          <View style={styles.rbview}>
            <Text></Text>
            <Text style={{color: 'black', fontSize: 20}}></Text>

            <TouchableOpacity
              style={{}}
              onPress={() => {
                refRBSheet.current.close()
              }}>
              <MaterialIcons name="close" size={24} color={'black'} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              takePhotoFromCamera()
              refRBSheet.current.close()
            }}
            style={{paddingLeft: 15, flexDirection: 'row'}}>
            <Camera />
            <Text style={styles.txtimg}>Take a Photo</Text>
          </TouchableOpacity>

          <Divider style={styles.divider} />

          <TouchableOpacity
            onPress={() => {
              takePhotoFromGallery()
              refRBSheet.current.close()
            }}
            style={{paddingLeft: 15, flexDirection: 'row'}}>
            <Gallery />
            <Text style={styles.txtimg}>Choose a Photo</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default SignIn
