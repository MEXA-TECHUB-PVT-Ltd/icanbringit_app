import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Animated} from 'react-native'

import CheckSnackBar from '../../assets/svgs/CheckSnackBar.svg'
import { colors, theme } from '../../themes'
import { hp, wp } from '../../utils/helpers/Dimensions'

const CustomSnackbar = ({visible, message, messageDescription, onDismiss}) => {
  const [animation] = useState(new Animated.Value(0))
  
  useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false, // Ensure you have this set to false for Android
      }).start()
      const timeout = setTimeout(() => {
        onDismiss()
      }, 3000)
      return () => clearTimeout(timeout)
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start()
    }
  }, [visible])
  
  if (!visible) return null
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0], // Slide in from the top
              }),
            },
          ],
        },
      ]}>
      <View style={{marginLeft: wp(3)}}>
        <CheckSnackBar width={wp(18)} height={hp(9)} />
      </View>
      <View>
        <View style={{marginLeft: wp(3), marginTop: hp(0.5)}}>
          <Text style={styles.message}>{message}</Text>
        </View>
        <View style={{marginLeft: wp(3)}}>
          <Text style={styles.messageDescription}>{messageDescription}</Text>
        </View>
      </View>
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 15,
    right: 15,
    height: hp(7.5),
    borderRadius: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  message: {
    color: colors.vivid_malachite,
    fontSize: wp(4.5),
    fontWeight: theme.light.fontWeight.medium,
  },
  messageDescription: {
    color: colors.dark_charcoal,
    fontSize: wp(3.5),
    fontWeight: theme.light.fontWeight.ultraLight,
  },
})
export default CustomSnackbar
