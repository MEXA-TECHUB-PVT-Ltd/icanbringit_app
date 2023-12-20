import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import Colors from '../../themes/colors'
import SettingHeader from '../../components/SettingHeader/SettingHeader'
import CustomText from '../../components/Text'
import { colors } from '../../themes'

const Setting = ({navigation}) => {
  const data = [
    {
      id: '1',
      title: 'Go Premium',
      goto: () => navigation.navigate('GoPremium'),
    },
    {
      id: 2,
      title: 'Edit Profile',
      goto: () => navigation.navigate('EditProfile'),
    },
    {
      id: 2,
      title: 'Change Password',
      goto: () => navigation.navigate('UpdatePassword'),
    },
    {
      id: 2,
      title: 'Privacy Policy',
      goto: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      id: 2,
      title: 'FAQs',
      goto: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      id: 2,
      title: 'Contact Support',
      goto: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      id: 2,
      title: 'Feedback',
      goto: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      id: 2,
      title: 'Affiliate Partner',
      goto: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      id: 2,
      title: 'Delete Account',
      goto: () => navigation.navigate('PrivacyPolicy'),
    },
  ]
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={item.goto}
        style={{
          paddingHorizontal: 20,
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 35,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <CustomText text={item.title} style={{fontSize: 16, color: Colors.black}} />
        <AntDesign name="right" size={18} color={Colors.black} />
      </TouchableOpacity>
      <View
        style={{
          height: 0.5,
          backgroundColor: colors.lavender,
          marginHorizontal: 20,
          marginTop: 10,
        }}
      />
    </View>
  )
  return (
    <SafeAreaView style={{flexGrow: 1, paddingTop: 25, backgroundColor: Colors.white}}>
      <SettingHeader title={'Settings'} />
      <View>
        <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem} />
      </View>
      <View style={{alignItems: 'center', marginTop: 45}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.primary,
            width: '90%',
            padding: 12,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <SimpleLineIcons name="logout" size={18} color={Colors.white} />

          <CustomText text={'Logout'} style={{color: Colors.white, marginLeft: 10}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({})
