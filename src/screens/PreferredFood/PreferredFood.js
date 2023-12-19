import React, {useState} from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen'

import Custom_Button from '../../components/button/Custom_Button'

const PreferredFood = () => {
  const [clickedId, setclickedId] = useState()

  const [fm, setfm] = useState([
    {
      id: 1,
      head: 'Vegetarian',
    },
    {
      id: 2,
      head: 'Vegan',
    },
    {
      id: 3,
      head: 'Gluten-Free',
    },
  ])
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginHorizontal: 20}}>
        <Signin_signup_header title="What is your preferred food?" />
      </View>
      <View style={{marginHorizontal: '7%'}}>
        <FlatList
          data={fm}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setclickedId(index)
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
            )
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
  )
}

export default PreferredFood

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
})