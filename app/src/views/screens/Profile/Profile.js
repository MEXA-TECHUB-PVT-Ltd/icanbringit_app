import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

import CustomText from '../../../components/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import COLORS from '../../../consts/colors';
import Images from '../../../consts/Images';

const Profile = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [button1Color, setButton1Color] = useState('white');
  const [button2Color, setButton2Color] = useState('transparent');
  const [button2TextColor, setButton2TextColor] = useState('black');
  const [showEvents, setShowEvents] = useState(true);

  const handleButton1Click = () => {
    setButton1Color('white');
    setButton2Color('transparent');
    setButton2TextColor('black');
    setShowEvents(true);
  };

  const handleButton2Click = () => {
    setButton1Color('transparent');
    setButton2Color('white');
    setButton2TextColor('gray');
    setShowEvents(false);
  };
  const data = [
    {
      id: '1',
      user: 'Candyland Carnival',
      title: 'Notification Title 1',
      time: '+200 People',
    },
    {
      id: '2',
      user: 'Candyland Carnival',
      title: 'Notification Title 2',
      time: '+200 People',
    },
    {
      id: '3',
      user: 'Candyland Carnival',
      title: 'Notification Title 3',
      time: '+200 People',
    },
    {
      id: '3',
      user: 'Candyland Carnival',
      title: 'Notification Title 3',
      time: '+200 People',
    },
    {
      id: '3',
      user: 'Candyland Carnival',
      title: 'Notification Title 3',
      time: '+200 People',
    },
    // Add more data as needed
  ];
  const data2 = [
    {id: '1', user: 'Candyland Carnival'},
    {id: '2', user: 'Candyland Carnival'},
    {id: '3', user: 'Candyland Carnival'},
    {id: '3', user: 'Candyland Carnival'},
    {id: '3', user: 'Candyland Carnival'},

    // Add more data as needed
  ];
  const renderItem2 = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={Images.profiledp} style={styles.userImage2} />
      <View style={styles.userInfo}>
        <Text style={styles.userName2}>{item.user}</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText22}>Done</Text>
        </TouchableOpacity>
        <View>{/* <Text style={styles.userName2}>{item.user}</Text> */}</View>
      </View>
    </View>
  );
  const renderItem = ({item}) => (
    <TouchableOpacity style={[styles.card,{}]} 
    onPress={()=> navigation.navigate('MyEvent')}
    >
      <Image source={Images.listAvatar} style={styles.userImage} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.notificationTime}> {item.time}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewEvent')}
          style={styles.button}>
          <Text style={styles.buttonText}>Online Event</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 30,
          backgroundColor: '#D1D0E0',
          height: 50,
          marginRight: 20,
          borderRadius: 8,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomText text={'30 Oct'} style={{}} />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={{flexGrow: 1, paddingTop: 30, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <CustomText
          text={'Profile'}
          style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}
        />
        <TouchableOpacity 
        onPress={()=> navigation.navigate('Setting')}
        style={{}}>
          <Ionicons name="settings-sharp" size={28} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 50,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Images.avatar} style={{}} />
        <CustomText
          text={'John Deo'}
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: COLORS.black,
          }}
        />
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={[styles.button1, {backgroundColor: button1Color}]}
          onPress={handleButton1Click}>
          <Text style={[styles.buttonText2, {color: COLORS.green}]}>
            About Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button1, {backgroundColor: button2Color}]}
          onPress={handleButton2Click}>
          <Text style={[styles.buttonText2, {color: COLORS.green}]}>
            My Events
          </Text>
        </TouchableOpacity>
      </View>
      {showEvents ? (
        <View style={styles.container}>
          {/* <FlatList
            data={data2}
            keyExtractor={item => item.id}
            renderItem={renderItem2}
          /> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 5,
            }}>
            <CustomText text={'Email Address'} />
            <CustomText
              text={'Johndoe@gmail.com'}
              style={{fontWeight: 'bold', color: COLORS.black}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 5,
            }}>
            <CustomText text={'Gender'} />
            <CustomText
              text={'Male'}
              style={{fontWeight: 'bold', color: COLORS.black}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 5,
            }}>
            <CustomText text={'Age'} />
            <CustomText
              text={'29 years old'}
              style={{fontWeight: 'bold', color: COLORS.black}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 5,
            }}>
            <CustomText text={'City, Country'} />
            <CustomText
              text={'Washington, US'}
              style={{fontWeight: 'bold', color: COLORS.black}}
            />
          </View>
          <View style={{marginHorizontal: 15, marginTop: 15}}>
            <CustomText
              text={'Preferences'}
              style={{fontWeight: 'bold', color: COLORS.black}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginTop: 10,
            }}>
            <CustomText text={'Event type'} />
            <TouchableOpacity
              onPress={() => navigation.navigate('PreferedEvents')}
              style={{
                backgroundColor: '#D1D0E0',
                width: 80,
                height: 25,
                borderRadius: 4,
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                name="edit-3"
                size={12}
                color={COLORS.black}
                style={{marginRight: 8}}
              />

              <CustomText text={'Change'} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#6B7AED',
                padding: 7,
                borderRadius: 15,
                marginLeft: 10,
              }}>
              <CustomText text={'WorkShop'} style={{color: COLORS.white}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#EE544A',
                padding: 6,
                borderRadius: 15,
                marginLeft: 10,
              }}>
              <CustomText text={'Concert'} style={{color: COLORS.white}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF8D5D',
                padding: 7,
                borderRadius: 15,
                marginLeft: 10,
              }}>
              <CustomText text={'Music'} style={{color: COLORS.white}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginTop: 10,
            }}>
            <CustomText text={'Preferred Locations'} />
            <TouchableOpacity
              onPress={() => navigation.navigate('PreferredLocation')}
              style={{
                backgroundColor: '#D1D0E0',
                width: 80,
                height: 25,
                borderRadius: 4,
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                name="edit-3"
                size={12}
                color={COLORS.black}
                style={{marginRight: 8}}
              />

              <CustomText text={'Change'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#39D1F2',
              padding: 7,
              borderRadius: 15,
              marginLeft: 10,
              width: 110,
            }}>
            <CustomText text={'Within my city'} style={{color: COLORS.white}} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginTop: 10,
            }}>
            <CustomText text={'Food Preferences'} />
            <TouchableOpacity
              onPress={() => navigation.navigate('PreferredFood')}
              style={{
                backgroundColor: '#D1D0E0',
                width: 80,
                height: 25,
                borderRadius: 4,
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 7,
              }}>
              <Feather
                name="edit-3"
                size={12}
                color={COLORS.black}
                style={{marginRight: 8}}
              />

              <CustomText text={'Change'} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#29D697',
                padding: 7,
                borderRadius: 15,
                marginLeft: 10,
              }}>
              <CustomText text={'Vegetarian '} style={{color: COLORS.white}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#7D67EE',
                padding: 6,
                borderRadius: 15,
                marginLeft: 10,
              }}>
              <CustomText text={'Vegan'} style={{color: COLORS.white}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F4D51C',
                padding: 7,
                borderRadius: 15,
                marginLeft: 10,
              }}>
              <CustomText text={'Gluetan-Free'} style={{color: COLORS.white}} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 20,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#D1D0E0',
    borderRadius: 30,
    height: 45,
    marginHorizontal: 20,
  },
  button1: {
    padding: 5,
    borderRadius: 18,
    height: 30,
    width: '40%',
    alignSelf: 'center',
  },
  buttonText2: {
    // fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    marginHorizontal: 10,
    marginTop: 15,
  },
  userImage: {
    width: 60,
    height: 60,
    // borderRadius: 30,
    margin: 8,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationTitle: {
    fontSize: 14,
  },
  notificationTime: {
    fontSize: 12,
    color: 'gray',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 5,
    borderRadius: 4,
    marginRight: 8,
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    marginHorizontal: 10,
  },
  userImage2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userName2: {
    fontSize: 15,
    color: 'black', // Text color for the username
    marginRight: 8,
  },
  actionButton: {
    backgroundColor: '#2ecc71', // Background color for the button
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  buttonText22: {
    color: '#fff', // Text color for the button
    fontWeight: 'bold',
  },
});
