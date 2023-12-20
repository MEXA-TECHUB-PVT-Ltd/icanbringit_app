import React, {useState} from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native'

import {widthPercentageToDP} from 'react-native-responsive-screen'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import Custom_Button from '../../components/button/Custom_Button'
import {colors, fonts} from '../../themes'
import {globalMarginStyles as gms, globalStyles as gs} from '../../styles'

const PreferedEvents = () => {
  const [clickedId, setclickedId] = useState()

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
  ])
  return (
    <View style={gs.whiteContainer}>
      <View style={gms.mh20}>
        <Signin_signup_header title="What type of Events do you prefer?" />
      </View>
      <View style={{marginHorizontal: '7%'}}>
        <FlatList
          data={fm}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setclickedId(index)}
              style={[
                styles.optionsView,
                {backgroundColor: index === clickedId ? colors.picton_blue : colors.white},
              ]}>
              <Text
                style={[styles.text, {color: index === clickedId ? colors.white : colors.black}]}>
                {item.head}
              </Text>
            </TouchableOpacity>
          )}
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

export default PreferedEvents

const styles = StyleSheet.create({
  optionsView: {
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: colors.ash_grey,
    width: 280,
    height: 40,
    marginTop: '5%',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    textAlign: 'center',
    fontSize: widthPercentageToDP(4),
    fontFamily: fonts.montserrat.regular,
  },
})
