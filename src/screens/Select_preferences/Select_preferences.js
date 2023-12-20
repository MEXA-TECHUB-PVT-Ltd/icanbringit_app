import React, {useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  LogBox,
  StatusBar,
} from 'react-native'

import {ProgressBar} from 'react-native-paper'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'
import Back from '../../assets/svgs/back.svg'
import { colors } from '../../themes'

LogBox.ignoreAllLogs()

const Select_preferences = ({navigation}) => {
  const [clickedId, setclickedId] = useState()
  const [clickedId1, setclickedId1] = useState()
  const [clickedId2, setclickedId2] = useState()
  const [count, setcount] = useState(1)
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
  const [sd, setsd] = useState([
    {
      id: 1,
      head: 'With in my City ',
    },
    {
      id: 2,
      head: 'Anywhere in Country',
    },
  ])
  const [bs, setbs] = useState([
    {
      id: 1,
      head: 'Vegetarian ',
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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
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

          <Text style={styles.txt}>What type of Events do you prefer?</Text>

          <View style={{marginHorizontal: '7%', marginTop: '25%'}}>
            {count == 1 ? (
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
            ) : count == 2 ? (
              <FlatList
                data={sd}
                scrollEnabled={false}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setclickedId1(index)
                      }}
                      style={[
                        index === clickedId1
                          ? [styles.optionsView, {backgroundColor: colors.picton_blue}]
                          : [styles.optionsView, {backgroundColor: colors.white}],
                      ]}>
                      <Text
                        style={[
                          index === clickedId1
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
            ) : (
              <FlatList
                data={bs}
                scrollEnabled={false}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setclickedId2(index)
                      }}
                      style={[
                        index === clickedId2
                          ? [styles.optionsView, {backgroundColor: colors.picton_blue}]
                          : [styles.optionsView, {backgroundColor: colors.white}],
                      ]}>
                      <Text
                        style={[
                          index === clickedId2
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
            )}
            <View style={styles.v1}>
              <Text style={styles.txt1}>
                {count}
                <Text style={styles.txt2}>/3</Text>
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.btnl, {backgroundColor: colors.primary}]}
                onPress={() => {
                  setcount(count + 1)
                  if (count >= 3) {
                    navigation.navigate('Thank_you')
                  }
                }}>
                <MaterialIcons name={'navigate-next'} size={36} color={colors.anti_flash_white} />
              </TouchableOpacity>
            </View>
            <ProgressBar
              progress={count == 1 ? 0.3 : count == 2 ? 0.6 : count == 3 ? 1 : 0}
              color={colors.picton_blue}
              style={styles.p}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Select_preferences
