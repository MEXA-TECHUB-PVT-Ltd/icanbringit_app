import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {Text} from 'react-native';
import {styles} from './styles';
import COLORS from '../../../consts/colors';
import {Text as SvgText} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../../../components/Text';
import Images from '../../../consts/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import Custom_Button from '../../../components/button/Custom_Button';
const Chat = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, [navigation]);

  const ref_RBSheetCamera = useRef(null);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  const customInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <SvgText fontSize={20}>&#128522;</SvgText>
        </TouchableOpacity>
        <InputToolbar {...props} />
      </InputToolbar>
    );
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{backgroundColor: COLORS.green, padding: 12}}>
          <Feather name="send" size={20} color={COLORS.white} />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#D1D0E0',
          },
        }}
        textStyle={{
          right: {
            color: COLORS.black,
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = props => {};

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <View style={styles.container}>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Ionicons
            name="chevron-back-outline"
            size={28}
            color={COLORS.black}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={Images.ChatDp} />
            <View style={{marginLeft: 10, width: '60%'}}>
              <CustomText
                text={'Sahara Ardia...'}
                style={{fontSize: 16, fontWeight: 'bold'}}
              />
              <CustomText text={'Online'} />
            </View>
            <View style={{width: '10%', alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => ref_RBSheetCamera.current.open()}>
                <Entypo
                  name="dots-three-vertical"
                  size={20}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{alignItems: 'center', alignContent: 'center', marginTop: 20}}>
        <CustomText
          text={'Start Your Chat'}
          style={{color: COLORS.black, fontSize: 18}}
        />
      </View>
      <GiftedChat
        scrollToBottom
        alwaysShowSend
        showAvatarForEveryMessage={false}
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        renderInputToolbar={props => customInputToolbar(props)}
        textInputStyle={{color: COLORS.black}}
        renderBubble={renderBubble}
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
      />

      <RBSheet
        ref={ref_RBSheetCamera}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: COLORS.white,
            height: 3,
            width: 50,
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: '20%',
          },
        }}>
        <View>
          <View style={{marginHorizontal: 20}}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => ref_RBSheetCamera.current.close()}>
                <AntDesign name="close" size={20} color={COLORS.black} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Report');
                ref_RBSheetCamera.current.close();
              }}
              style={{padding: 10}}>
              <CustomText text={'Report User'} />
            </TouchableOpacity>
            <View style={{height: 0.5, backgroundColor: '#D1D0E0'}} />
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                ref_RBSheetCamera.current.close();
                toggleModal();
              }}>
              <CustomText text={'Delete Chat'} style={{padding: 10}} />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 0.2,
            backgroundColor: COLORS.white,
            borderRadius: 15,
            marginHorizontal: 20,
          }}>
          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <CustomText
              text={'Delete Chat'}
              style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}
            />
            <CustomText
              text={'Do you want to delete chat?'}
              style={{fontSize: 13, color: COLORS.grey, marginTop: 6}}
            />
          </View>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={{
                padding: 10,
                backgroundColor: '#D1D0E0',
                width: '40%',
                borderRadius: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText text={'Cancel'} style={{color: COLORS.black}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#1B1464',
                width: '40%',
                borderRadius: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText text={'Yes Delete'} style={{color: COLORS.white}} />
            </TouchableOpacity>
          </View>
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Chat;
