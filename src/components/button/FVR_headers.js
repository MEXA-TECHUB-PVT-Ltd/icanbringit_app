import React from 'react'
import {View, Text, TouchableOpacity, StatusBar, StyleSheet} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import {heightPercentageToDP} from 'react-native-responsive-screen'

import Back from '../../assets/svgs/back.svg'
import {colors, fonts} from '../../themes'

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
    color: colors.black,
    fontSize: heightPercentageToDP(3.2),
    fontFamily: fonts.montserrat.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  txt1: {
    color: colors.davy_grey,
    fontSize: heightPercentageToDP(2),
    fontFamily: fonts.montserrat.medium,
    marginTop: '5%',
    marginHorizontal: '8%',
    textAlign: 'center',
  },
  icon: {marginTop: '14%', marginBottom: '7%', marginHorizontal: '5%'},
})
