import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import Back from './../../assets/svgs/back.svg'
import {fonts} from '../../themes'
import Colors from '../../themes/colors'
import { hp } from '../../utils/helpers/Dimensions'

export default function Custom_Button(props) {
  const navigation = useNavigation()

  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />

      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Back width={35} height={35} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.txt}>{props.title}</Text>

      <Text style={styles.txt1}>{props.title1}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  txt: {
    color: Colors.black,
    fontSize: hp(3.2),
    fontFamily: fonts.montserrat.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  txt1: {
    color: Colors.black,
    fontSize: hp(2.8),
    fontFamily: fonts.montserrat.bold,
    marginLeft: '8%',
    marginTop: '10%',
  },
  icon: {marginTop: '14%', marginBottom: '7%', marginHorizontal: '5%'},
})
