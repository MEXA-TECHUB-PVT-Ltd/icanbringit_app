import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import Back from './../../assets/svgs/back.svg'
import {colors, fonts} from '../../themes'
import { hp } from '../../utils/helpers/Dimensions'

export default function Header({title, txtStyle}) {
  const navigation = useNavigation()
  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Back width={35} height={35} style={styles.icon} />
      </TouchableOpacity>

      <Text style={[styles.txt, txtStyle]}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  txt: {
    color: colors.black,
    fontSize: hp(3.2),
    fontFamily: fonts.montserrat.bold,
    textAlign: 'center',
  },
  icon: {marginTop: '14%', marginHorizontal: '3%'},
})
