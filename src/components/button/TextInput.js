import React, {useState} from 'react'
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

import Email from './../../assets/svgs/email.svg'
import Lock from './../../assets/svgs/Lock.svg'
import Eye from './../../assets/svgs/eye.svg'
import Close_eye from './../../assets/svgs/close_eye.svg'

import {colors} from '../../themes'
import {globalStyles as gs} from '../../styles'

const EmailInput = props => (
  <View style={[styles.container, styles.mt7p]}>
    <Email width={20} height={20} />
    <TextInput style={gs.fill} placeholder={props.title} />
  </View>
)

const PasswordInput = props => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <View style={styles.container}>
      <Lock width={20} height={20} />
      <TextInput style={gs.fill} placeholder={props.title} secureTextEntry={!passwordVisible} />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        {passwordVisible ? <Eye width={20} height={20} /> : <Close_eye width={20} height={20} />}
      </TouchableOpacity>
    </View>
  )
}

const Input = props => (
  <View style={styles.inputContainer}>
    <TextInput
      value={props.value}
      onChangeText={props.onChangeText}
      style={[gs.fill, styles.textColor]}
      keyboardType={props.type}
      placeholder={props.title}
      placeholderTextColor={colors.spanish_grey}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gainsboro,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%',
    backgroundColor: colors.white,
  },
  inputContainer: {
    borderColor: colors.gainsboro,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%',
    marginTop: '2%',
    marginBottom: '5%',
    backgroundColor: colors.white,
  },
  mt7p: {marginTop: '7%'},
  textColor: {
    color: colors.spanish_grey,
  },
})

export {EmailInput, PasswordInput, Input}
