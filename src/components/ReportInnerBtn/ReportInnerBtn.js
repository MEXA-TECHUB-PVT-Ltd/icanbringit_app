import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import COLORS from '../../themes/colors'

const ReportInnerBtn = ({style, onPress, buttonText, textStyle, icon_view, isDisabled = false}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.container, style]} disabled={isDisabled}>
        <Text style={[styles.defaultText, textStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  )
}

export default ReportInnerBtn

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    width: '98%',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    borderColor: COLORS.black,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },

  defaultText: {
    color: COLORS.black,
    fontSize: 13,
  },
})
