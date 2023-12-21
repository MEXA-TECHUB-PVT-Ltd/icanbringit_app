import React, {useState, useRef} from 'react'
import {SafeAreaView, StatusBar, Image, View, TouchableOpacity} from 'react-native'

import {Text} from 'react-native-paper'
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import images from '../../constants/images'
import B1 from '../../assets/svgs/filldot.svg'
import B2 from '../../assets/svgs/blankdot.svg'
import {colors} from '../../themes'

import styles from './styles'
import {globalStyles as gs} from '../../styles'

const imagesArr = [images.f1, images.f2, images.f3, images.f4]

const slideTexts = [
  'Organize Your Events With Ease',
  'Plan Your Perfect Event',
  'Add All The Details',
  'AI Event Recommendations',
]
const slidedes = [
  'We simplify event creation, management, and sharing with friends and family.',
  'Choose the date, time and place for your event in just few taps.',
  'Describe your event, set a guest list, create a timeline to keep everything organized',
  'This feature uses advanced AI to suggest events tailored to your interests and location.',
]
function Onboarding({navigation}) {
  const swiperRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1
      setCurrentSlide(newSlide)
      swiperRef.current.scrollBy(-1)
    }
  }

  const goToNextSlide = () => {
    if (currentSlide < imagesArr.length - 1) {
      const newSlide = currentSlide + 1
      setCurrentSlide(newSlide)
      swiperRef.current.scrollBy(1)
    }
    if (currentSlide == 3) {
      navigation.navigate('Main_Screen')
    }
  }

  const onIndexChanged = async index => {
    setCurrentSlide(index)
    if (index == 4) {
      navigation.replace('Welcome')
      await AsyncStorage.setItem('boardcheck', 'true')
    }
  }

  return (
    <SafeAreaView style={gs.fill}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.transparent}
        translucent={true}
      />
      <View style={styles.mainView}>
        <Swiper
          style={styles.wrapper}
          loop={false}
          ref={swiperRef}
          showsPagination={false}
          onIndexChanged={onIndexChanged}>
          {imagesArr.map((image, index) => (
            <View style={styles.slide} key={index}>
              <Image source={image} style={styles.image} resizeMode={'contain'} />
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
        <View style={styles.btnContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.btnl,
              {backgroundColor: currentSlide == 0 ? colors.anti_flash_white : colors.primary},
            ]}
            onPress={goToPreviousSlide}>
            <MaterialIcons
              name={'navigate-before'}
              size={36}
              color={currentSlide == 0 ? colors.philipine_grey : colors.anti_flash_white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.btnl, {backgroundColor: colors.primary}]}
            onPress={goToNextSlide}>
            <MaterialIcons name={'navigate-next'} size={36} color={colors.anti_flash_white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding
