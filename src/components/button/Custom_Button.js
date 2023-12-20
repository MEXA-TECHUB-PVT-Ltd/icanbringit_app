import React from 'react'
import {StyleSheet} from 'react-native'

import {Button} from 'react-native-paper'
import {widthPercentageToDP} from 'react-native-responsive-screen'
import {colors, fonts} from '../../themes'

export default function Custom_Button(props, style) {
  return (
    <Button
      disabled={props.checkdisable}
      mode="contained"
      onPress={props.customClick}
      style={[styles.button, style]}
      contentStyle={styles.contentStyle}
      loading={props.load}
      labelStyle={styles.labelStyle}>
      {props.title}
    </Button>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 300,
    marginBottom: '3%',
  },
  labelStyle: {
    fontSize: widthPercentageToDP(4),
    fontFamily: fonts.montserrat.medium,
    color: colors.white,
    alignSelf: 'center',
  },
  contentStyle: {
    padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
