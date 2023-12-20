import React, {useEffect, useState} from 'react'
import {ScrollView, View, ImageBackground, Text, StatusBar} from 'react-native'

import {CircularProgress} from 'react-native-circular-progress'
import {useIsFocused} from '@react-navigation/native'

import images from '../../constants/images'
import { colors } from '../../themes'

import styles from './styles'
import { globalStyles as gs } from '../../styles'

const Thank_you = ({navigation}) => {
  const isFocused = useIsFocused()
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fillRate = 1 // Rate at which the circle fills

    const fillCircle = () => {
      if (count < 100) {
        // Update count gradually until 100
        const timer = setInterval(() => {
          setCount(prevCount => Math.min(prevCount + fillRate, 100))
        }, 100) // Interval time between updates in milliseconds

        return () => clearInterval(timer)
      } else {
        navigation.replace('Explore')
      }
    }

    fillCircle() // Start filling the circle
  }, [count, navigation, isFocused])

  return (
    <ScrollView style={gs.fill} contentContainerStyle={gs.flexGrowFill}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.transparent} translucent={true} />
      <View style={styles.mainv}>
        <ImageBackground
          source={images.bbg}
          style={styles.full}
          resizeMode="stretch">
          <Text style={styles.txt}>Thank you for providing the information</Text>

          <View style={styles.progressBarContainer}>
            <CircularProgress
              size={170}
              width={10}
              fill={count}
              tintColor={colors.ash_grey}
              backgroundColor="#B6BEA959"
              rotation={0}
              lineCap="round">
              {() => <Text style={styles.txt1}>{count}%</Text>}
            </CircularProgress>
          </View>
          <View style={styles.v1}>
            <View style={styles.v2}>
              <Text style={styles.txt3}>Creating Your Account</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

export default Thank_you
