import React, {useState} from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native'

import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import Custom_Button from '../../components/button/Custom_Button'
import {colors, fonts} from '../../themes'

const PreferredLocation = () => {
  const [clickedId, setclickedId] = useState()

  const [fm, setfm] = useState([
    {
      id: 1,
      head: 'With in my City',
    },
    {
      id: 2,
      head: 'Anywhere in Country',
    },
  ])
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginHorizontal: 20}}>
        <Signin_signup_header title="What is your preferred location for events?" />
      </View>
      <View style={{marginHorizontal: '7%'}}>
        <FlatList
          data={fm}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setclickedId(index)}
                style={[
                  index === clickedId
                    ? [styles.optionsView, {backgroundColor: colors.picton_blue}]
                    : [styles.optionsView, {backgroundColor: colors.white}],
                ]}>
                <Text
                  style={[
                    index === clickedId
                      ? [styles.text, {color: colors.white}]
                      : [styles.text, {color: colors.black}],
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

export default PreferredLocation

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontSize: heightPercentageToDP(3.2),
    fontFamily: fonts.montserrat.bold,
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
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    textAlign: 'center',
    fontSize: widthPercentageToDP(4),
    fontFamily: fonts.montserrat.regular,
  },
})
