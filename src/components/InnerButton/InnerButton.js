import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import Colors from '../../themes/colors'
import Icon from '../../constants/Icons'

const InnerButton = ({
  style,
  onPress,
  buttonText,
  textStyle,
  icon_view,
  isDisabled = false,
  Lefticon,
  name,
  type,
  color,
  size,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.container, style]} disabled={isDisabled}>
        <View style={[styles.row, icon_view]}>
          <Text style={[styles.defaultText, textStyle]}>{buttonText}</Text>
        </View>
        {Lefticon && <Icon name={name} type={type} color={color} size={size} style={styles.icon} />}
      </TouchableOpacity>
    </>
  )
}

export default InnerButton

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
    fontSize: 13,
  },
  icon: {
    alignSelf: 'flex-end',
    padding: 15,
    height: 50,
    marginTop: 30,
  },
})
