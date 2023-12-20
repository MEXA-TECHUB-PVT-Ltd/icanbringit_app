import React from 'react'
import {StyleSheet, Text} from 'react-native'

import Colors from '../themes/colors'

const CustomText = ({style, text, numberOfLines, onLayout}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]} onLayout={onLayout}>
      {text}
    </Text>
  )
}
const styles = StyleSheet.create({
  text: {
    color: Colors.quartz,
  },
})

export default CustomText
