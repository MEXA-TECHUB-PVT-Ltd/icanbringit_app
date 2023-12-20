import React from 'react'
import {SafeAreaView, StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native'
import FastImage from 'react-native-fast-image'
import images from '../../constants/images'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Back from '../../assets/svgs/back.svg'
import CustomText from '../../components/Text'
import Colors from '../../themes/colors'
import Custom_Button from '../../components/button/Custom_Button'
import {colors, theme} from '../../themes'
import {globalStyles} from '../../styles'

const AssignedTask = ({navigation}) => {
  return (
    <SafeAreaView style={{...globalStyles.fill, paddingTop: 50}}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <FastImage
          source={images.eventBG}
          style={{
            height: 200,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          resizeMode="stretch">
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              height: 40,
              width: 35,
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 10,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Back width={35} height={35} />
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
            <CustomText text={'Halloween Festivals'} style={{fontWeight: 'bold', fontSize: 16}} />
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Entypo name="location-pin" size={20} color={Colors.spanish_grey} />

              <CustomText text={'123 Elm Street, USA'} style={{fontSize: theme.light.fontSize.xs}} />
            </View>
          </View>
          <View>
            <View
              style={{
                height: 50,
                backgroundColor: colors.gainsboro_light,
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
              <MaterialCommunityIcons name="party-popper" size={20} color={Colors.spanish_grey} />

              <CustomText text={'Party'} style={{fontSize: 12, marginHorizontal: 5}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Ionicons name="time-outline" size={20} color={Colors.spanish_grey} />

              <CustomText text={'05:00 pm - 10:00pm'} style={{fontSize: 12, marginHorizontal: 5}} />
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <CustomText
            text={'Location'}
            style={{fontWeight: 'bold', fontSize: 16, color: Colors.black}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Entypo name="link" size={18} color={Colors.black} />
              <CustomText text={'http://www.sample.com./'} style={{fontSize: 12, marginLeft: 7}} />
            </View>
            <View style={{alignSelf: 'flex-end', width: '30%'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 5,
                  backgroundColor: colors.gainsboro_light,
                  borderRadius: 5,
                }}>
                <Ionicons name="copy-outline" size={20} color={Colors.black} />
                <CustomText text={'CopyLink'} style={{color: Colors.black}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AssignedTaskDetails')}
            style={{
              backgroundColor: Colors.spanish_grey,
              padding: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <CustomText text={'Assigned Task'} style={{color: Colors.white}} />
            <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginTop: '30%'}}>
          <Custom_Button title={'Done task'} />
        </View>
        <View style={{height: 50}} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AssignedTask

const styles = StyleSheet.create({})
