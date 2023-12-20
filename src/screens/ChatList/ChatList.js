import React, {useState} from 'react'
import {FlatList, SafeAreaView, StyleSheet, View, Image, TouchableOpacity} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import CustomText from '../../components/Text'
import Colors from '../../themes/colors'
import images from '../../constants/images'
import InputField from '../../components/InputFiled'

const ChatList = ({navigation}) => {
  const [showInputField, setShowInputField] = useState(false)

  const handleSearchIconPress = () => setShowInputField(!showInputField)

  const PartiesData = [
    {
      id: 1,
      image: images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 2,
      image: images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: images.ChatDp2,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: images.ChatDp2,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: images.ChatDp2,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
  ]
  return (
    <SafeAreaView style={{flexGrow: 1, backgroundColor: Colors.white, paddingTop: 30}}>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          {!showInputField ? (
            <CustomText
              text={'Chats'}
              style={{fontSize: 20, fontWeight: 'bold', color: Colors.black}}
            />
          ) : (
            <TouchableOpacity
              onPress={handleSearchIconPress}
              style={{
                justifyContent: 'center',
                height: 60,
                marginTop: 15,
              }}>
              <Ionicons name="chevron-back-outline" size={28} color={Colors.black} />
            </TouchableOpacity>
          )}
        </View>

        {showInputField && (
          <View style={{width: '90%'}}>
            <InputField style={{height: 40, width: '100%'}} />
            <View
              style={{
                position: 'absolute',
                alignSelf: 'flex-start',
                marginTop: 30,
                paddingHorizontal: 10,
              }}>
              <AntDesign name="search1" size={22} color={Colors.old_silver_o2} />
            </View>
          </View>
        )}

        <View>
          {!showInputField && (
            <TouchableOpacity onPress={handleSearchIconPress}>
              <AntDesign name="search1" size={22} color={Colors.black} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{paddingTop: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PartiesData}
          renderItem={({item}) => (
            <View style={styles.flatlist_container2}>
              <View></View>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Chat')}>
                <Image source={item.image} resizeMode="contain" />
                <View
                  style={{
                    width: '80%',
                    height: 65,
                    marginLeft: 10,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '90%',
                    }}>
                    <CustomText
                      text={item.title}
                      style={{fontWeight: 'bold', color: Colors.black}}
                    />
                    <CustomText text={item.time} />
                  </View>
                  <CustomText text={item.detail} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default ChatList

const styles = StyleSheet.create({
  flatlist_container2: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  titleView: {
    color: Colors.secondary,
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
})
