import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import SettingHeader from '../../components/SettingHeader/SettingHeader'
import CustomText from '../../components/Text'

import {data} from '../../data/settings-data'
import Colors from '../../themes/colors'
import {colors} from '../../themes'

const Setting = ({navigation}) => {

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={item.goto} style={styles.listItem}>
        <CustomText text={item.title} style={styles.textmd} />
        <AntDesign name="right" size={18} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <SettingHeader title={'Settings'} />
      <View>
        <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <SimpleLineIcons name="logout" size={18} color={Colors.white} />
          <CustomText text={'Logout'} style={styles.btnText} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {flexGrow: 1, paddingTop: 25, backgroundColor: Colors.white},
  listItem: {
    paddingHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    alignContent: 'center',
    alignItems: 'center',
  },
  textmd: {fontSize: 16, color: Colors.black},
  btnContainer: {alignItems: 'center', marginTop: 45},
  divider: {
    height: 0.5,
    backgroundColor: colors.lavender,
    marginHorizontal: 20,
    marginTop: 10,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    width: '90%',
    padding: 12,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {color: Colors.white, marginLeft: 10},
})
