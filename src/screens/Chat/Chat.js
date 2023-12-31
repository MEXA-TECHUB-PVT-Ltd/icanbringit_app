import React, {useState, useCallback, useRef} from 'react'
import {View, TouchableOpacity, SafeAreaView, Image} from 'react-native'

import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat'
import {Text as SvgText} from 'react-native-svg'
import RBSheet from 'react-native-raw-bottom-sheet'
import Modal from 'react-native-modal'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {styles} from './styles'
import Colors from '../../themes/colors'
import CustomText from '../../components/Text'
import images from '../../constants/images'
import {colors, theme} from '../../themes'
import {
  globalStyles as gs,
  globalMarginStyles as gms,
  globalPaddingStyles as gps,
} from '../../styles'

const Chat = ({navigation, route}) => {
  const [messages, setMessages] = useState([])
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    })
  }, [navigation])

  const ref_RBSheetCamera = useRef(null)

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }, [])

  const customInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: Colors.white,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <SvgText fontSize={20}>&#128522;</SvgText>
        </TouchableOpacity>
        <InputToolbar {...props} />
      </InputToolbar>
    )
  }

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{backgroundColor: Colors.primary, padding: 12}}>
          <Feather name="send" size={20} color={Colors.white} />
        </View>
      </Send>
    )
  }

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.lavender,
          },
        }}
        textStyle={{
          right: {
            color: Colors.black,
          },
        }}
      />
    )
  }

  return (
    <SafeAreaView style={gs.flexGrowFill}>
      <View style={styles.container}>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Ionicons name="chevron-back-outline" size={28} color={Colors.black} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={images.chatDp} />
            <View style={{marginLeft: 10, width: '60%'}}>
              <CustomText text={'Sahara Ardia...'} style={{fontSize: 16, fontWeight: 'bold'}} />
              <CustomText text={'Online'} />
            </View>
            <View style={{width: '10%', alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => ref_RBSheetCamera.current.open()}>
                <Entypo name="dots-three-vertical" size={20} color={Colors.black} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', alignContent: 'center', marginTop: 20}}>
        <CustomText
          text={'Start Your Chat'}
          style={{color: Colors.black, fontSize: theme.light.fontSize.lg}}
        />
      </View>
      <GiftedChat
        scrollToBottom
        alwaysShowSend
        showAvatarForEveryMessage={false}
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        renderInputToolbar={props => customInputToolbar(props)}
        textInputStyle={{color: Colors.black}}
        renderBubble={renderBubble}
        renderSend={renderSend}
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
            backgroundColor: Colors.white,
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
          <View style={gms.mh20}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => ref_RBSheetCamera.current.close()}>
                <AntDesign name="close" size={20} color={Colors.black} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Report')
                ref_RBSheetCamera.current.close()
              }}
              style={gps.p10}>
              <CustomText text={'Report User'} />
            </TouchableOpacity>
            <View style={{height: 0.5, backgroundColor: colors.lavender}} />
            <TouchableOpacity
              style={gms.mt10}
              onPress={() => {
                ref_RBSheetCamera.current.close()
                toggleModal()
              }}>
              <CustomText text={'Delete Chat'} style={gps.p10} />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 0.2,
            backgroundColor: Colors.white,
            borderRadius: 15,
            marginHorizontal: 20,
          }}>
          <View style={(gms.mh20, gms.mt10)}>
            <CustomText
              text={'Delete Chat'}
              style={{fontSize: theme.light.fontSize.lg, fontWeight: 'bold', color: Colors.black}}
            />
            <CustomText
              text={'Do you want to delete chat?'}
              style={{fontSize: 13, color: Colors.quartz, marginTop: 6}}
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
                backgroundColor: colors.lavender,
                width: '40%',
                borderRadius: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText text={'Cancel'} style={{color: Colors.black}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: colors.primary,
                width: '40%',
                borderRadius: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText text={'Yes Delete'} style={{color: Colors.white}} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Chat
