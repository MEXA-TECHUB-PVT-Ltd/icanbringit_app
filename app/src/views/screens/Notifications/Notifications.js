import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  StatusBar,
} from 'react-native';
import React from 'react';
// import {FlatList} from 'react-native-gesture-handler';
import Images from '../../../consts/Images';
import COLORS from '../../../consts/colors';
import CustomText from '../../../components/Text';
import FVR_headers from '../../../components/button/FVR_headers';
import Header from '../../../components/Header/Header';

const Notifications = ({navigation}) => {
  const notificationData = [
    {
      id: 1,
      image: Images.profiledp,
      title: 'David Silbia Invite Jo Malone London’s Mother’s ',
      time: '08:01 PM',
      status: true,
      type: 'Accept',
    },
    {
      id: 2,
      image: Images.profiledp,
      title: 'David Silbia Invite Jo Malone London’s Mother’s ',

      time: '08:01 PM',
      status: true,
      type: 'Ignore',
    },
    {
      id: 3,
      image: Images.profiledp,
      title: 'David Silbia Invite Jo Malone London’s Mother’s ',
      status: true,
      type: 'Accept',
      time: '08:01 PM',
    },
    {
      id: 4,
      image: Images.profiledp,
      title: 'David Silbia Invite Jo Malone London’s Mother’s ',
      status: true,
      type: 'Ignore',
      time: '08:01 PM',
    },
    {
      id: 5,
      image: Images.profiledp,
      title: 'David Silbia Invite Jo Malone London’s Mother’s ',
      status: true,
      type: 'Accept',
      time: '08:01 PM',
    },
    {
      id: 5,
      image: Images.profiledp,
      title: 'James Else has download the form',
      time: '08:01 PM',
      status: false,
      type: 'Ignore',
    },
    {
      id: 5,
      image: Images.profiledp,
      title: 'James Else has download the form',
      time: '08:01 PM',
      status: false,
      type: 'Accept',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} />

      <Header title={'Notifications'} />
      <FlatList
        ListHeaderComponent={() => <Text>Today</Text>}
        showsHorizontalScrollIndicator={false}
        data={notificationData}
        renderItem={({item, ind}) => (
          <View style={{paddingHorizontal: 20, paddingTop: 15}}>
            <View style={{height: 120}}>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Image
                  source={item.image}
                  style={{height: 50, width: 50, marginHorizontal: 10}}
                />
                <View style={{width: '60%'}}>
                  <CustomText text={item.title} style={{paddingTop: 10}} />
                </View>
                  <CustomText text={item.time} style={{fontSize:12, marginTop:11}} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  paddingRight: 20,
                }}></View>

             
              <View
                style={{
                  flexDirection: 'row',
                  marginTop:5
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.greylight,
                    padding: 10,
                    marginRight: 10,
                    borderRadius:10

                  }}>
                  <CustomText text={item.type} style={{color: COLORS.black}} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.green,
                    padding: 10,
                    marginRight: 10,
                    borderRadius:10
                  }}>
                  <CustomText text={item.type} style={{color:COLORS.white}}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: 0.5, backgroundColor: COLORS.greylight}} />
          </View>
        )}
      />
    </View>
  );
};

export default Notifications;
