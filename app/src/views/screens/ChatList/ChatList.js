import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../../consts/colors';
import Images from '../../../consts/Images';
import InputField from '../../../components/InputFiled';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatList = ({navigation}) => {
  const [showInputField, setShowInputField] = useState(false);

  const handleSearchIconPress = () => {
    setShowInputField(!showInputField);
  };
  const PartiesData = [
    {
      id: 1,
      image: Images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 2,
      image: Images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: Images.ChatDp2,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: Images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: Images.ChatDp2,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: Images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: Images.ChatDp2,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
    {
      id: 3,
      image: Images.ChatDp,
      title: 'Sahara Ardia Fadia',
      time: ' 5:00 pm',
      detail: 'Okay see you soon',
    },
  ];
  return (
    <SafeAreaView
      style={{flexGrow: 1, backgroundColor: COLORS.white, paddingTop: 30}}>
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
              style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}
            />
          ) : (
            <TouchableOpacity
              onPress={handleSearchIconPress}
              style={{
                justifyContent: 'center',
                height: 60,
                // alignSelf:'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="chevron-back-outline"
                size={28}
                color={COLORS.black}
              />
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
              <AntDesign name="search1" size={22} color={COLORS.greylight} />
            </View>
          </View>
        )}

        <View>
          {!showInputField && (
            <TouchableOpacity onPress={handleSearchIconPress}>
              <AntDesign name="search1" size={22} color={COLORS.black} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{paddingTop: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PartiesData}
          style={{}}
          // horizontal
          renderItem={({item}) => {
            return (
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
                        style={{fontWeight: 'bold', color: COLORS.black}}
                      />
                      <CustomText text={item.time} />
                    </View>
                    <CustomText text={item.detail} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  flatlist_container2: {
    // height: 50,
    marginHorizontal: 10,
    marginTop: 10,
    // elevation: 0.9,
    // width: 150,
  },
  titleView: {
    color: COLORS.secondary,
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});
