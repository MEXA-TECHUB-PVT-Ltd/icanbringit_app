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

import Back from './../../../assets/svg/back.svg';
import {widthPercentageToDP} from 'react-native-responsive-screen';

function SignIn({navigation}) {
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
          <TouchableOpacity
            activeOpacity={0.7}
            // style={{backgroundColor:'pink'}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Back
              width={35}
              height={35}
              style={{
                marginTop: '14%',
                marginBottom: '7%',
                marginHorizontal: '5%',
              }}
            />
          </TouchableOpacity>

          <Text style={styles.txt1}>Add Location</Text>
          <Text style={styles.txt}>
            To provide you with the best experience, we need access to your
            device location.
          </Text>
          <View style={{marginHorizontal: '7%', marginTop: '0%'}}>
            {/* <Image source={appImages.pin_map} style={styles.map} /> */}

            <View
              style={{
                alignSelf: 'center',
                marginTop: '33%',
                marginBottom: '5%',
              }}>
              {/* <CustomButton
                title="Use my Current Location"
                load={false}
                // checkdisable={inn == '' && cm == '' ? true : false}
                customClick={() => {
                  navigation.navigate('Select_preferences')
                }}
              /> */}

              {/* <Button
                disabled={false}
                mode="contained"
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
                style={styles.button}
                contentStyle={{
                  padding: '1%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                loading={false}
                labelStyle={{
                  fontSize: widthPercentageToDP(4),
                  // paddingTop: '1%',
                  fontFamily: 'Montserrat-Medium',
                  color: '#1B1464',
                  alignSelf: 'center',
                }}>
                Add Location
              </Button> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;
