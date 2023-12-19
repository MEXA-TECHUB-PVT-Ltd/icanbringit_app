import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Back from './../../assets/svgs/back.svg'
import {heightPercentageToDP} from 'react-native-responsive-screen'

const SettingHeader = ({title, txtStyle}) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: '8%',
        justifyContent: 'space-around',
        marginHorizontal: 20,
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.goBack()
        }}>
        <Back width={35} height={35} style={{}} />
      </TouchableOpacity>
      <View style={{width: '99%'}}>
        <Text style={[styles.txt, txtStyle]}>{title}</Text>
      </View>
    </View>
  )
}

export default SettingHeader

const styles = StyleSheet.create({
  txt: {
    color: '#000',
    fontSize: heightPercentageToDP(3),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
})
