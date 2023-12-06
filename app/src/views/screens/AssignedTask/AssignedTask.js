import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import Images from '../../../consts/Images';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Back from './../../../assets/svg/back.svg';
import CustomText from '../../../components/Text';
import COLORS from '../../../consts/colors';
import Custom_Button from '../../../components/button/Custom_Button';
import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';

const AssignedTask = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <ScrollView style={{backgroundColor: '#ffff'}}>
        {/* <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        /> */}
        {/* <View style={{height: 40}} /> */}
        <FastImage
          source={Images.EventBG}
          style={{
            height: 200,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          resizeMode="stretch">
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 35,
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 10,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Back width={35} height={35} style={{}} />
          </TouchableOpacity>
        </FastImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <View>
            <CustomText
              text={'Halloween Festivals'}
              style={{fontWeight: 'bold', fontSize: 16}}
            />
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Entypo name="location-pin" size={20} color={COLORS.blue} />

              <CustomText text={'123 Elm Street, USA'} style={{fontSize: 12}} />
            </View>
          </View>
          <View>
            <View
              style={{
                height: 50,
                backgroundColor: '#DDDCE8',
                width: 40,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText text={'30 Oct'} style={styles.txt} />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <MaterialCommunityIcons
                name="party-popper"
                size={20}
                color={COLORS.blue}
              />

              <CustomText
                text={'Party'}
                style={{fontSize: 12, marginHorizontal: 5}}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Ionicons name="time-outline" size={20} color={COLORS.blue} />

              <CustomText
                text={'05:00 pm - 10:00pm'}
                style={{fontSize: 12, marginHorizontal: 5}}
              />
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <CustomText
            text={'Location'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Entypo name="link" size={18} color={COLORS.black} />
              <CustomText
                text={'http://www.sample.com./'}
                style={{fontSize: 12, marginLeft: 7}}
              />
            </View>
            <View style={{alignSelf: 'flex-end', width: '30%'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 5,
                  backgroundColor: '#DDDCE8',
                  borderRadius: 5,
                }}>
                <Ionicons name="copy-outline" size={20} color={COLORS.black} />
                <CustomText text={'CopyLink'} style={{color: COLORS.black}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('AssignedTaskDetails')}
            style={{
              backgroundColor: COLORS.blue,
              padding: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <CustomText text={'Assigned Task'} style={{color: COLORS.white}} />
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:20, marginTop:'30%'}}>
            <Custom_Button title={'Done task'}/>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignedTask;

const styles = StyleSheet.create({});
