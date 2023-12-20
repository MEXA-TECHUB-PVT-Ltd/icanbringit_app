import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import Colors from '../../themes/colors'

const InnerButton = ({style, onPress, buttonText, textStyle, icon_view, isDisabled = false}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.container, style]} disabled={isDisabled}>
        <View style={[styles.row, icon_view]}>
          <Text style={[styles.defaultText, textStyle]}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    width: '98%',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    borderColor: Colors.black,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  defaultText: {
    color: Colors.black,
    fontSize: 16,
    alignSelf: 'center',
  },
})

export default InnerButton

