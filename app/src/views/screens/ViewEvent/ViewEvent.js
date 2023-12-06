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
import React from 'react';
import FastImage from 'react-native-fast-image';
import Images from '../../../consts/Images';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Back from './../../../assets/svg/back.svg';
import CustomText from '../../../components/Text';
import COLORS from '../../../consts/colors';

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
  ];
  return (
    <SafeAreaView style={{flex: 1, paddingTop:50,}}>
      <ScrollView style={{backgroundColor: '#ffff'}}>
        {/* <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        /> */}
        {/* <View style={{height: 40}} /> */}
        <FastImage
          source={Images.EventBG}
          style={{height: 200}}
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
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Back
              width={35}
              height={35}
              style={{
                marginTop: '14%',
                marginBottom: '7%',
                marginHorizontal: '5%',
              }}
            />
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
                backgroundColor: 'gray',
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
              // backgroundColor:'red'
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
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 6,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.joinPplDP} />
          <CustomText
            text={'+ 250 people joined'}
            style={{fontSize: 12, marginHorizontal: 5}}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <CustomText
            text={'Description'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
          <CustomText
            text={
              'Join us for a spine-tingling and enchanting evening at the "Spooky Spectacle - Halloween Festival"! This Halloween, were conjuring up a magical world of mystery where the veil between the living and the supernatural is at its thinnest.'
            }
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <CustomText
            text={'Location'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="link" size={20} color={COLORS.black} />
            <CustomText text={'http://www.sample.com./'} />
            <View style={{alignSelf: 'flex-end', width: '30%'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 5,
                  backgroundColor: 'gray',
                  borderRadius: 5,
                }}>
                <Ionicons name="copy-outline" size={20} color={COLORS.black} />
                <CustomText text={'CopyLink'} style={{color: COLORS.black}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <CustomText
            text={'Event Items'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
          <View>
            <FlatList
              //   showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={btnData}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <View style={styles.flatlist_container}>
                    <View style={styles.card}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: COLORS.blue,
                          padding: 10,
                          borderRadius: 10,
                          marginTop: 10,
                        }}>
                        <CustomText text={item.title} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: 10,
          }}>
          {/* <Custom_Button title={'Join Event'} /> */}
          <TouchableOpacity style={styles.btnView} onPress={()=> navigation.navigate('ReminderScreen')}>
            <CustomText
              text={'I’m excited to join'}
              style={{color: COLORS.white, fontSize: 13}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnView, {width: 100, alignItems: 'center'}]}>
            <CustomText
              text={'I can’t Join'}
              style={{color: COLORS.white, fontSize: 13}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.btnView,
              {
                width: 150,
                alignSelf: 'center',
                marginTop: 10,
                backgroundColor: '#949494',
                alignItems:'center'
              },
            ]}>
            <CustomText
              text={'Maybe, I’ll Join'}
              style={{color: COLORS.white, fontSize: 13}}
            />
          </TouchableOpacity>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewEvent;

const styles = StyleSheet.create({
  txt: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
  flatlist_container: {
    height: 100,
    marginHorizontal: 10,
  },
  btnView: {backgroundColor: COLORS.green, padding: 10, borderRadius: 7},
});
