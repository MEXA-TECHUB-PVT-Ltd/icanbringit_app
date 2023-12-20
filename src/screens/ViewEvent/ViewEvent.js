import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'

import FastImage from 'react-native-fast-image'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import images from '../../constants/images'
import CustomText from '../../components/Text'
import Back from '../../assets/svgs/back.svg'
import Colors from '../../themes/colors'
import {colors, theme} from '../../themes'
import {globalMarginStyles as gms, globalPaddingStyles as gps} from '../../styles'

const ViewEvent = ({navigation}) => {
  const btnData = [
    {
      id: 1,
      title: 'Decorations',
    },
    {
      id: 1,
      title: 'Party Favors',
    },
    {
      id: 1,
      title: 'Games & Activities',
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <FastImage source={images.eventBG} style={styles.coverImg} resizeMode="stretch">
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <Back width={35} height={35} style={styles.icon} />
          </TouchableOpacity>
        </FastImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            ...gms.mh20,
            ...gms.mt10,
          }}>
          <View>
            <CustomText text={'Halloween Festivals'} style={{fontWeight: 'bold', fontSize: 16}} />
            <View style={{flexDirection: 'row', ...gms.mt5}}>
              <Entypo name="location-pin" size={20} color={colors.skye_blue} />

              <CustomText
                text={'123 Elm Street, USA'}
                style={{fontSize: theme.light.fontSize.xs}}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                height: 50,
                backgroundColor: Colors.grey,
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
              ...gms.mh20,
              ...gms.mt5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', ...gms.mt5}}>
              <MaterialCommunityIcons name="party-popper" size={20} color={colors.skye_blue} />

              <CustomText text={'Party'} style={{fontSize: theme.light.fontSize.xs, ...gms.mh5}} />
            </View>
            <View style={{flexDirection: 'row', ...gms.mt5}}>
              <Ionicons name="time-outline" size={20} color={colors.skye_blue} />

              <CustomText
                text={'05:00 pm - 10:00pm'}
                style={{fontSize: theme.light.fontSize.sm, ...gms.mh5}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            ...gms.mh20,
            marginTop: 6,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={images.joinPplDP} />
          <CustomText
            text={'+ 250 people joined'}
            style={[{fontSize: theme.light.fontSize.xs}, gms.mh5]}
          />
        </View>
        <View style={[gms.mh20, gms.mt5]}>
          <CustomText text={'Description'} style={styles.heading} />
          <CustomText
            text={
              'Join us for a spine-tingling and enchanting evening at the "Spooky Spectacle - Halloween Festival"! This Halloween, were conjuring up a magical world of mystery where the veil between the living and the supernatural is at its thinnest.'
            }
          />
        </View>
        <View style={[gms.mh20, gms.mt5]}>
          <CustomText text={'Location'} style={styles.heading} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="link" size={20} color={Colors.black} />
            <CustomText text={'http://www.sample.com./'} />
            <View style={{alignSelf: 'flex-end', width: '30%'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  ...gps.p5,
                  backgroundColor: Colors.grey,
                  borderRadius: 5,
                }}>
                <Ionicons name="copy-outline" size={20} color={Colors.black} />
                <CustomText text={'CopyLink'} style={{color: Colors.black}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={gps.ph20}>
          <CustomText text={'Event Items'} style={styles.heading} />
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={btnData}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={styles.flatlist_container}>
                  <View style={styles.card}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.skye_blue,
                        borderRadius: 10,
                        ...gps.p10,
                        ...gms.mt10,
                      }}>
                      <CustomText text={item.title} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            ...gms.mh10,
          }}>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => navigation.navigate('ReminderScreen')}>
            <CustomText text={'I`m excited to join'} style={styles.smText} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnView, {width: 100, alignItems: 'center'}]}>
            <CustomText text={'I can`t Join'} style={styles.smText} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.btnView, styles.smBtnView]}>
            <CustomText text={'Maybe, I`ll Join'} style={styles.smText} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ViewEvent

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50},
  txt: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  flatlist_container: {
    height: 100,
    marginHorizontal: 10,
  },
  divider: {height: 50},
  btnView: {backgroundColor: colors.primary, padding: 10, borderRadius: 7},
  smBtnView: {
    width: 150,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: colors.spanish_grey,
    alignItems: 'center',
  },
  smText: {color: Colors.white, fontSize: 13},
  iconContainer: {
    backgroundColor: colors.white,
    height: 40,
    width: 35,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: '14%',
    marginBottom: '7%',
    marginHorizontal: '5%',
  },
  coverImg: {height: 200},
  heading: {fontWeight: 'bold', fontSize: theme.light.fontSize.md, color: colors.black},
})
