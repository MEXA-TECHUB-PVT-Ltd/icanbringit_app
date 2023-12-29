import React from 'react'
import {StyleSheet} from 'react-native'

import {Button} from 'react-native-paper'
import {colors, fonts} from '../../themes'
import {wp} from '../../utils/helpers/Dimensions'

function Custom_Button(props, style) {
  const textColor = props.type === 'secondary' ? colors.primary : colors.white
  const buttonColor = props.type === 'secondary' ? colors.primary_light : colors.primary
  
  return (
    <Button
      disabled={props.checkdisable}
      mode="contained"
      onPress={props.customClick}
      style={[styles.button, style, {backgroundColor: buttonColor}]}
      contentStyle={styles.contentStyle}
      loading={props.load}
      labelStyle={[styles.labelStyle, {color: textColor}]}>
      {props.title}
    </Button>
  )
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 300,
    marginBottom: '3%',
  },
  labelStyle: {
    fontSize: wp(4),
    fontFamily: fonts.montserrat.medium,
    alignSelf: 'center',
  },
  contentStyle: {
    padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Custom_Button
