import React, {useState} from 'react'
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import Colors from '../../themes/colors'
import Icon from '../../constants/Icons'
import {colors} from '../../themes'
import {globalPaddingStyles as gps} from '../../styles'

const InputField = ({
  style,
  placeholder,
  onChangeText,
  secureText = false,
  keyboardType,
  defaultValue,
  onFocus,
  onBlur,
  ref,
  isEdit,
  value,
  returnKeyType,
  multiline,
  textContentType,
  color,
  icon,
  Lefticon,
  name,
  type,
  size,
}) => {
  const [passwordHide, setpasswordHide] = useState(secureText)

  return (
    <View>
      <View style={styles.Lefticon}>
        {Lefticon && <Icon name={name} type={type} color={color} size={size} style={gps.p10} />}
      </View>
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureText && passwordHide}
        style={[styles.input, style]}
        placeholderTextColor={'#949494'}
        defaultValue={defaultValue}
        onFocus={onFocus}
        onBlur={onBlur}
        editable={isEdit}
        returnKeyType={returnKeyType}
        underlineColorAndroid="transparent"
        multiline={multiline}
        textContentType={textContentType}
        cursorColor={Colors.black}
      />
      {icon && (
        <TouchableOpacity style={styles.Righticon} onPress={() => setpasswordHide(!passwordHide)}>
          {passwordHide ? (
            <Feather name="eye" size={22} color={Colors.grey} />
          ) : (
            <Feather name="eye-off" size={22} color={Colors.grey} />
          )}
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: 20,
    paddingHorizontal: 40,
    color: colors.black,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.black,
    opacity: 0.8,
  },
  Righticon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 15,
    marginTop: 20,
  },
  Lefticon: {
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: 5,
  },
})

export default InputField
