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
} from 'react-native';
import {
  Text,
  Button,
  Snackbar,
  Headline,
  ActivityIndicator,
  Colors,
  TouchableRipple,
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import COLORS from '../../../consts/colors';
import {base_url, base_url1} from '../../../consts/base_url';
import appImages from './../../../consts/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import B1 from './../../../assets/svg/filldot.svg';
import B2 from './../../../assets/svg/blankdot.svg';

const images = [
  appImages.f1, // Replace with your image paths
  appImages.f2,
  appImages.f3,
  appImages.f4,
];

const slideTexts = [
  'Organize Your Events With Ease',
  'Plan Your Perfect Event',
  'Add All The Details',
  'AI Event Recommendations',
];
const slidedes = [
  'We simplify event creation, management, and sharing with friends and family.',
  'Choose the date, time and place for your event in just few taps.',
  'Describe your event, set a guest list, create a timeline to keep everything organized',
  'This feature uses advanced AI to suggest events tailored to your interests and location.',
];
function Onboarding({navigation}) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      swiperRef.current.scrollBy(-1);
    }
  };

  const goToNextSlide = () => {
    console.log('currentSlide---', currentSlide);
    if (currentSlide < images.length - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      swiperRef.current.scrollBy(1);
    }
    if (currentSlide == 3) {
      navigation.navigate('Main_Screen');
    }
  };

  const onIndexChanged = async index => {
    setCurrentSlide(index);
    console.log('index--->', index);
    if (index == 4) {
      navigation.replace('Welcome');
      await AsyncStorage.setItem('boardcheck', 'true');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.mainView}>
        <Swiper
          style={styles.wrapper}
          loop={false}
          ref={swiperRef}
          // paginationStyle={styles.paginationStyle}
          showsPagination={false}
          onIndexChanged={onIndexChanged}>
          {images.map((image, index) => (
            <View style={styles.slide} key={index}>
              <Image
                source={image}
                style={styles.image}
                resizeMode={'contain'}
              />
              <View style={styles.buttonContainer}>
                <Text style={styles.txt3}>{slideTexts[currentSlide]}</Text>
                <Text style={styles.txt4}>{slidedes[currentSlide]}</Text>

                <View style={styles.v}>
                  {currentSlide == 0 ? <B1 /> : <B2 />}
                  {currentSlide == 1 ? <B1 /> : <B2 />}
                  {currentSlide == 2 ? <B1 /> : <B2 />}
                  {currentSlide == 3 ? <B1 /> : <B2 />}
                </View>
              </View>
            </View>
          ))}
        </Swiper>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '9%',
            marginBottom: '10%',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.btnl,
              {backgroundColor: currentSlide == 0 ? '#F0F0F0' : '#1B1464'},
            ]}
            onPress={goToPreviousSlide}>
            <MaterialIcons
              name={'navigate-before'}
              size={36}
              color={currentSlide == 0 ? '#8A8A8A' : '#F0F0F0'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.btnl, {backgroundColor: '#1B1464'}]}
            onPress={goToNextSlide}>
            <MaterialIcons name={'navigate-next'} size={36} color={'#F0F0F0'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;
