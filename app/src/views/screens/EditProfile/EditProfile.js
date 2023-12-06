import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SettingHeader from '../../../components/SettingHeader/SettingHeader';
import COLORS from '../../../consts/colors';
import CustomText from '../../../components/Text';
import Images from '../../../consts/Images';
import InputField from '../../../components/InputFiled';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Custom_Button from '../../../components/button/Custom_Button';
import CustomSnackbar from '../../../components/CustomSnackbar/CustomSnackbar';

const EditProfile = ({navigation}) => {
  const [openItem, setOpenItem] = useState(false);

  const [loadedValue, setLoadedValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'item11'},
    {label: 'Female', value: 'item22'},
    {label: 'Prefer not to say', value: 'item33'},
  ]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');

  const ref_RBSheetCamera = useRef(null);
  const takePhotoFromCamera = async value => {
    setSelectedItem(value);
    launchCamera(
      {
        mediaType: 'Photo',
        //videoQuality: 'medium',
      },
      response => {
        console.log('image here', response);
        if (!response.didCancel) {
          if (response.assets && response.assets.length > 0) {
            setImageUri(response.assets[0].uri);
            console.log('response', response.assets[0].uri);
          } else if (response.uri) {
            // Handle the case when no assets are present (e.g., for videos)
            setImageUri(response.uri);
            console.log('response', response.uri);
          }
        }
        ref_RBSheetCamera.current.close();
      },
    );
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);
  const choosePhotoFromLibrary = value => {
    setSelectedItem(value);
    launchImageLibrary({mediaType: 'Photo'}, response => {
      console.log('image here', response);
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
      console.log('response', imageUri);
      ref_RBSheetCamera.current.close();
    });
  };
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePassword = async () => {
    setSnackbarVisible(true);
    setTimeout(() => {
      setSnackbarVisible(false);
      navigation.navigate('Setting');
    }, 3000);
  };
  const UpdateProfile = () => {
    handleUpdatePassword();
  };
  return (
    <SafeAreaView
      style={{flexGrow: 1, paddingTop: 25, backgroundColor: COLORS.white}}>
      <ScrollView>
        <SettingHeader title={'Edit Profile'} />
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 50,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.avatar} style={{}} />
          <TouchableOpacity onPress={() => ref_RBSheetCamera.current.open()}>
            <CustomText
              text={'Change Photo'}
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.green,
                textDecorationLine: 'underline',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <CustomText
            text={'Full Name'}
            style={{fontWeight: 'bold', color: COLORS.black}}
          />
          <InputField placeholder={'John Doe'} />
          <View style={{marginTop: 20}}>
            <CustomText
              text={'Gender'}
              style={{fontWeight: 'bold', color: COLORS.black}}
            />
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
                borderColor: '#D1D0E0',
                paddingHorizontal: 20,
              }}
            />
          </View>
          <CustomText
            text={'Age'}
            style={{fontWeight: 'bold', color: COLORS.black}}
          />
          <InputField placeholder={'29'} />
          <CustomText
            text={'City'}
            style={{fontWeight: 'bold', color: COLORS.black}}
          />
          <InputField placeholder={'Washington'} />
          <CustomText
            text={'Country'}
            style={{fontWeight: 'bold', color: COLORS.black}}
          />
          <InputField placeholder={'United States'} />
        </View>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 40,
            bottom: 10,
          }}>
          <Custom_Button title={'Edit'} customClick={()=>UpdateProfile()}/>
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
              color={'#303030'}
              onPress={() => ref_RBSheetCamera.current.close()}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-evenly',
            // alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => takePhotoFromCamera('camera')}
            style={{flexDirection: 'row'}}>
            <Ionicons
              // color={selectedItem === 'camera' ? '#FACA4E' : '#888888'}
              name="camera"
              size={25}
              color={COLORS.green}
            />
            <Text style={{color: '#333333', marginLeft: 10}}>Take Photo</Text>
          </TouchableOpacity>
          <View
            style={{height: 0.5, backgroundColor: '#D1D0E0', marginTop: 9}}
          />
          <TouchableOpacity
            onPress={() => choosePhotoFromLibrary('gallery')}
            style={{flexDirection: 'row', marginTop: 10}}>
            <MaterialCommunityIcons
              //   color={selectedItem === 'gallery' ? '#FACA4E' : '#888888'}
              name="image"
              size={25}
              color={COLORS.green}
            />
            <Text style={{color: '#333333', marginLeft: 10}}>
              Choose a Photo
            </Text>
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
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
