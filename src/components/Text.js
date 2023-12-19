import React from 'react'
import {StyleSheet, Text} from 'react-native'

import COLORS from '../themes/colors'

const CustomText = ({style, text, numberOfLines, onLayout}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]} onLayout={onLayout}>
      {text}
    </Text>
  )
}
const styles = StyleSheet.create({
  text: {
    // ...FONTS.Medium16,
    color: COLORS.grey,
  },
})

export default CustomText
