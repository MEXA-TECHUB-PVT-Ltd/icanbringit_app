import 'react-native-gesture-handler';
import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  BackHandler,
  Image,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import {
  Text,
  Button,
  Snackbar,
  Headline,
  ActivityIndicator,
  Colors,
  TouchableRipple,
  Divider,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import COLORS from '../../../consts/colors';
import {base_url, base_url1} from '../../../consts/base_url';
import appImages from './../../../consts/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '../../../components/button/Custom_Button';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-crop-picker';
import Signin_signup_header from '../../../components/button/Signin_signup_header';
import {Input} from '../../../components/button/TextInput';
import styles from './styles';

import Profile from './../../../assets/svg/Profile.svg';
import Gallery from './../../../assets/svg/gallary.svg';
import Camera from './../../../assets/svg/camera.svg';

const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Other', value: '3'},
];
function SignIn({navigation}) {
  const [value, setValue] = useState(null);

  const [isFocus, setIsFocus] = useState(false);
  const [image, setImage] = useState('');

  const takePhotoFromCamera = async () => {
    // console.warn('camera')
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
      });
    });
  };
  const takePhotoFromGallery = async () => {
    // console.warn('gallery')
    const data = await ImagePicker.openPicker({
      width: 500,
      height: 500,
    }).then(imageDetail => {
      console.log(imageDetail);
      console.log(imageDetail.path.split('/').pop());

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
      });
    });
  };
  const refRBSheet = useRef();
  const optionsv = item => {
    refRBSheet.current.open();
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <View style={styles.mainView}>
          <Signin_signup_header title="Add Profile Photo" />
          <View style={{marginHorizontal: '7%', marginTop: '0%'}}>
            <View style={styles.v1}>
              {
                //null ni ha to image ko dekhana ha
                image ? (
                  <Image
                    source={image}
                    style={styles.upload}
                    resizeMode={'stretch'}
                  />
                ) : (
                  <View style={styles.v}>
                    <Profile />
                  </View>
                )
              }
            </View>
            <Text
              onPress={() => {
                optionsv();
              }}
              style={styles.txt1}>
              {image == '' ? 'Add Photo' : 'Change Photo'}
            </Text>
          </View>

          <FlashMessage position="top" />
          <View
            style={{alignSelf: 'center', marginTop: '80%', marginBottom: '5%'}}>
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
                  });
                } else {
                  navigation.navigate('Add_Location');
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
                refRBSheet.current.close();
              }}>
              <MaterialIcons name="close" size={24} color={'black'} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              takePhotoFromCamera();
              refRBSheet.current.close();
            }}
            style={{paddingLeft: 15, flexDirection: 'row'}}>
            <Camera />
            <Text style={styles.txtimg}>Take a Photo</Text>
          </TouchableOpacity>

          <Divider style={styles.divider} />

          <TouchableOpacity
            onPress={() => {
              takePhotoFromGallery();
              refRBSheet.current.close();
            }}
            style={{paddingLeft: 15, flexDirection: 'row'}}>
            <Gallery />
            <Text style={styles.txtimg}>Choose a Photo</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}

export default SignIn;
