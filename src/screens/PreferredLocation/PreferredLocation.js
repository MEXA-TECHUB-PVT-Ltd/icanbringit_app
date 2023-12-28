import React, {useState} from 'react'
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import Custom_Button from '../../components/button/Custom_Button'
import {colors, fonts} from '../../themes'
import { globalStyles as gs, globalMarginStyles as gms } from '../../styles'
import { hp, wp } from '../../utils/helpers/Dimensions'

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
    <View style={gs.whiteContainer}>
      <View style={gms.mh20}>
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
    fontSize: wp(4),
    fontFamily: fonts.montserrat.regular,
  },
})
