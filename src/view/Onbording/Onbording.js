import React, {useRef, useState} from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native'

import Swiper from 'react-native-swiper'

import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'
import {images} from '../../assets/utilities'
import B1 from '../../assets/svgs/blankdot.svg'
import B2 from '../../assets/svgs/filldot.svg'

const imagesArr = [images.b1, images.b2, images.b3]

const slideTexts = [
  'Find Your Someone Special',
  'Interact Around the World',
  'Discover Your Ideal Match With Us',
]
const slidedes = [
  'Finding that special someone can be a wonderful journey filled with excitement, joy, and anticipation whether youre seeking romance, companionship, or a lifelong partnership, the search for your someone special is a unique path for you',
  'opens up a world of limitless connections and boundless opportunities. It invites individuals from all corners of the globe to engage, communicate, and collaborate across cultures, languages, and borders.',
  'We understand that finding the perfect match can be both exciting and challenging. Thats why were here to help you navigate the journey of finding that special someone.',
]
function App({navigation}) {
  const swiperRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => swiperRef.current.scrollBy(1)

  const onIndexChanged = async index => {
    setCurrentSlide(index)
    if (index == 3) {
      navigation.replace('Welcome')
      await AsyncStorage.setItem('boardcheck', 'true')
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.smText}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        style={styles.wrapper}
        loop={false}
        ref={swiperRef}
        showsPagination={false}
        onIndexChanged={onIndexChanged}>
        {imagesArr.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image source={image} style={styles.image} resizeMode={'cover'} />
            <View style={styles.buttonContainer}>
              <Text style={styles.txt3}>{slideTexts[currentSlide]}</Text>
              <Text style={styles.txt4}>{slidedes[currentSlide]}</Text>

              <View style={styles.v}>
                {currentSlide == 0 ? <B1 /> : <B2 />}
                {currentSlide == 1 ? <B1 /> : <B2 />}
                {currentSlide == 2 ? <B1 /> : <B2 />}
              </View>
            </View>
          </View>
        ))}
      </Swiper>
      <TouchableOpacity activeOpacity={0.7} style={styles.btnl} onPress={() => goToNextSlide()}>
        <Text style={styles.txtl}>{currentSlide != 2 ? 'Next' : 'Get Started'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
