import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  LogBox,
  StatusBar,
} from 'react-native';
import Signin_signup_header from '../../../components/button/Signin_signup_header';
import {
  heightPercentageToDP,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Custom_Button from '../../../components/button/Custom_Button';


const PreferedEvents = () => {
    const [clickedId, setclickedId] = useState();

    const [fm, setfm] = useState([
      {
        id: 1,
        head: 'Conferences',
      },
      {
        id: 2,
        head: 'Parties',
      },
      {
        id: 3,
        head: 'Workshops',
      },
    ]);
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{marginHorizontal: 20}}>
          <Signin_signup_header title="What type of Events do you prefer?" />
        </View>
        <View style={{marginHorizontal: '7%'}}>
          <FlatList
            data={fm}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setclickedId(index);
                  }}
                  style={[
                    index === clickedId
                      ? [styles.optionsView, {backgroundColor: '#3FA9F5'}]
                      : [styles.optionsView, {backgroundColor: 'white'}],
                  ]}>
                  <Text
                    style={[
                      index === clickedId
                        ? [styles.text, {color: 'white'}]
                        : [styles.text, {color: 'black'}],
                    ]}>
                    {item.head}
                  </Text>
                </TouchableOpacity>
              );
            }}
            numColumns={1}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            bottom: 20,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Custom_Button title={'Save'} />
        </View>
      </View>
    );
  };
  
export default PreferedEvents

const styles = StyleSheet.create({
    txt: {
      color: 'black',
      fontSize: heightPercentageToDP(3.2),
      fontFamily: 'Montserrat-Bold',
      alignSelf: 'center',
      textAlign: 'center',
      marginHorizontal: '11%',
    },
    optionsView: {
      justifyContent: 'center',
      borderWidth: 1,
      alignSelf: 'center',
      borderRadius: 15,
      borderColor: 'lightgray',
      width: 280,
      height: 40,
      marginTop: '5%',
      backgroundColor: 'white',
    },
    text: {
      color: '#000000',
      fontSize: 20,
      textAlign: 'center',
      fontSize: widthPercentageToDP(4),
      fontFamily: 'Montserrat-Regular',
    },
  });
  