import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Back from './../../assets/svgs/back.svg'
import {heightPercentageToDP} from 'react-native-responsive-screen'
import {colors, fonts} from '../../themes'

const SettingHeader = ({title, txtStyle}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Back width={35} height={35} />
      </TouchableOpacity>
      <View style={styles.titleWidth}>
        <Text style={[styles.txt, txtStyle]}>{title}</Text>
      </View>
    </View>
  )
}

export default SettingHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  txt: {
    color: colors.black,
    fontSize: heightPercentageToDP(3),
    fontFamily: fonts.montserrat.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  titleWidth: {width: '99%'},
})
