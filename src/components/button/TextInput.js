import React, {useState} from 'react'
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

import Email from './../../assets/svgs/email.svg'
import Lock from './../../assets/svgs/Lock.svg'
import Eye from './../../assets/svgs/eye.svg'
import Close_eye from './../../assets/svgs/close_eye.svg'
import { colors } from '../../themes'

const EmailInput = props => {
  return (
    <View
      style={styles.emailInputContainer}>
      <Email width={20} height={20} />
      <TextInput style={{flex: 1}} placeholder={props.title} />
    </View>
  )
}

const PasswordInput = props => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.gainsboro,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: '4%',
        marginTop: '7%',
        backgroundColor: colors.white,
      }}>
      <Lock width={20} height={20} />
      <TextInput style={{flex: 1}} placeholder={props.title} secureTextEntry={!passwordVisible} />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        {passwordVisible ? <Eye width={20} height={20} /> : <Close_eye width={20} height={20} />}
      </TouchableOpacity>
    </View>
  )
}

const Input = props => {
  return (
    <View
      style={{
        borderColor: colors.gainsboro,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: '4%',
        marginTop: '2%',
        marginBottom: '5%',
        backgroundColor: colors.white,
      }}>
      <TextInput style={{flex: 1}} keyboardType={props.type} placeholder={props.title} />
    </View>
  )
}

const styles = StyleSheet.create({
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gainsboro,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%',
    backgroundColor: colors.white,
  },
})

export {EmailInput, PasswordInput, Input}
