import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import COLORS from '../../../consts/colors';
import SettingHeader from '../../../components/SettingHeader/SettingHeader';
import Images from '../../../consts/Images';
import CustomText from '../../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
  ];
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
        <CustomText
          text={item.title}
          style={{fontSize: 16, color: COLORS.black}}
        />
        <AntDesign name="right" size={18} color={COLORS.black} />
      </TouchableOpacity>
      <View
        style={{
          height: 0.5,
          backgroundColor: '#D1D0E0',
          marginHorizontal: 20,
          marginTop: 10,
        }}
      />
    </View>
  );
  return (
    <SafeAreaView
      style={{flexGrow: 1, paddingTop: 25, backgroundColor: COLORS.white}}>
      <SettingHeader title={'Settings'} />
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 45}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.green,
            width: '90%',
            padding: 12,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <SimpleLineIcons name="logout" size={18} color={COLORS.white} />

          <CustomText
            text={'Logout'}
            style={{color: COLORS.white, marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
