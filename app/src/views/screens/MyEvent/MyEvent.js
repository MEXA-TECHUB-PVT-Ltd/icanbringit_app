import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import Images from '../../../consts/Images';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Back from './../../../assets/svg/back.svg';
import CustomText from '../../../components/Text';
import COLORS from '../../../consts/colors';
import Custom_Button from '../../../components/button/Custom_Button';
import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';

const MyEvent = ({navigation}) => {
  const [showDownloadButton, setShowDownloadButton] = useState(true);
  const [imageSource, setImageSource] = useState(Images.downloadBlurAvatar); // Initial image source
  const refRBSheet = useRef();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const btnData = [
    {
      id: 1,
      title: 'Decorations',
    },
    {
      id: 1,
      title: 'Party Favors',
    },
    {
      id: 1,
      title: 'Games & Activities',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <ScrollView style={{backgroundColor: '#ffff'}}>
        {/* <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        /> */}
        {/* <View style={{height: 40}} /> */}
        <FastImage
          source={Images.EventBG}
          style={{
            height: 200,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          resizeMode="stretch">
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 35,
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 10,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Back width={35} height={35} style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 35,
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 10,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              //   navigation.goBack();
              refRBSheet.current.open();
            }}>
            <Entypo name="dots-three-vertical" size={20} color={COLORS.black} />
          </TouchableOpacity>
        </FastImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <View>
            <CustomText
              text={'Halloween Festivals'}
              style={{fontWeight: 'bold', fontSize: 16}}
            />
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Entypo name="location-pin" size={20} color={COLORS.blue} />

              <CustomText text={'123 Elm Street, USA'} style={{fontSize: 12}} />
            </View>
          </View>
          <View>
            <View
              style={{
                height: 50,
                backgroundColor: '#DDDCE8',
                width: 40,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText text={'30 Oct'} style={styles.txt} />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <MaterialCommunityIcons
                name="party-popper"
                size={20}
                color={COLORS.blue}
              />

              <CustomText
                text={'Party'}
                style={{fontSize: 12, marginHorizontal: 5}}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Ionicons name="time-outline" size={20} color={COLORS.blue} />

              <CustomText
                text={'05:00 pm - 10:00pm'}
                style={{fontSize: 12, marginHorizontal: 5}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 6,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent:'space-between'
          }}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={Images.joinPplDP} />
            <CustomText
              text={'+ 250 people joined'}
              style={{fontSize: 12, marginHorizontal: 5}}
            />
          </View>

          <View>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('AttendeesList')}
            style={{backgroundColor:'#DDDCE8',padding:6, borderRadius:4}}>
                <CustomText text={'View List'}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <CustomText
            text={'Description'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
          <CustomText
            text={
              'Join us for a spine-tingling and enchanting evening at the "Spooky Spectacle - Halloween Festival"! This Halloween, were conjuring up a magical world of mystery where the veil between the living and the supernatural is at its thinnest.'
            }
            style={{fontSize:13}}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <CustomText
            text={'Location'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
           <View style={{flexDirection:'row', justifyContent:'space-around', }}>
           <Entypo name="link" size={18} color={COLORS.black} />
            <CustomText text={'http://www.sample.com./'} style={{fontSize:12, marginLeft:7}}/>
           </View>
            <View style={{alignSelf: 'flex-end', width: '30%'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 5,
                  backgroundColor: '#DDDCE8',
                  borderRadius: 5,
                }}>
                <Ionicons name="copy-outline" size={20} color={COLORS.black} />
                <CustomText text={'CopyLink'} style={{color: COLORS.black}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <CustomText
            text={'Event Items'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
          <View>
            <FlatList
              //   showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={btnData}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <View style={styles.flatlist_container}>
                    <View style={styles.card}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: COLORS.blue,
                          padding: 10,
                          borderRadius: 10,
                          marginTop: 10,
                        }}>
                        <CustomText text={item.title} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <CustomText
            text={'Invitation Card'}
            style={{fontWeight: 'bold', fontSize: 16, color: COLORS.black}}
          />
        </View>
        {/* <FastImage
          source={Images.downloadBlurAvatar}
          resizeMode="contain"
          style={{height: 220}}>
          <View style={{marginHorizontal: 20, width: '30%', borderRadius: 10, alignSelf:'center',marginTop:100}}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.green,
                flexDirection: 'row',
                padding: 10,
                borderRadius:10,
                justifyContent:'space-around',
              }}>
              <AntDesign name="download" size={16} color={COLORS.white} />
              <CustomText text={'Download'} style={{color: COLORS.white}} />
            </TouchableOpacity>
          </View>
        </FastImage> */}

        {showDownloadButton ? (
          <FastImage
            source={imageSource}
            resizeMode="contain"
            style={{height: 220}}>
            <View
              style={{
                marginHorizontal: 20,
                width: '30%',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 100,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.green,
                  flexDirection: 'row',
                  padding: 10,
                  borderRadius: 10,
                  justifyContent: 'space-around',
                }}
                onPress={() => {
                  setShowDownloadButton(false);
                  setImageSource(Images.downloadBlurAvatar); // Change to the new image source
                }}>
                <AntDesign name="download" size={16} color={COLORS.white} />
                <CustomText text={'Download'} style={{color: COLORS.white}} />
              </TouchableOpacity>
            </View>
          </FastImage>
        ) : (
          <>
            <FastImage
              source={Images.downloadAvatar}
              resizeMode="contain"
              style={{height: 220}}></FastImage>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  marginHorizontal: 20,
                  width: '30%',
                  borderRadius: 10,
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.green,
                    flexDirection: 'row',
                    padding: 10,
                    borderRadius: 10,
                    justifyContent: 'space-around',
                  }}
                  onPress={() => {
                    setShowDownloadButton(false);
                    // setImageSource(Images.downloadAvatar); // Change to the new image source
                  }}>
                  <AntDesign name="download" size={16} color={COLORS.white} />
                  <CustomText text={'download'} style={{color: COLORS.white}} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                  width: '30%',
                  borderRadius: 10,
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.green,
                    flexDirection: 'row',
                    padding: 10,
                    borderRadius: 10,
                    justifyContent: 'space-around',
                  }}
                  onPress={() => {
                    setShowDownloadButton(false);
                    setImageSource(Images.downloadBlurAvatar); // Change to the new image source
                  }}>
                  <AntDesign name="sharealt" size={16} color={COLORS.white} />
                  <CustomText
                    text={'Share card'}
                    style={{color: COLORS.white}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        <View style={{height: 50}}></View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
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
            height: '33%',
          },
        }}>
        <View>
          <View style={{marginHorizontal: 20}}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <AntDesign name="close" size={20} color={COLORS.black} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CreateEvent');
                refRBSheet.current.close();
              }}
              style={{padding: 10}}>
              <CustomText text={'Edit Event'} />
            </TouchableOpacity>
            <View style={{height: 0.5, backgroundColor: '#D1D0E0'}} />
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                refRBSheet.current.close();
                toggleModal();
              }}>
              <CustomText text={'Delete Event'} style={{padding: 10}} />
            </TouchableOpacity>
            <View style={{height: 0.5, backgroundColor: '#D1D0E0'}} />
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                refRBSheet.current.close();
                toggleModal();
              }}>
              <CustomText text={'Share Link'} style={{padding: 10}} />
            </TouchableOpacity>
            <View style={{height: 0.5, backgroundColor: '#D1D0E0'}} />
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                refRBSheet.current.close();
                toggleModal();
              }}>
              <CustomText
                text={'Share Invitation Card'}
                style={{padding: 10}}
              />
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
              text={'Delete'}
              style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}
            />
            <CustomText
              text={'Do you want to delete Event?'}
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

export default MyEvent;

const styles = StyleSheet.create({
  txt: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
  flatlist_container: {
    height: 100,
    marginHorizontal: 10,
  },
  btnView: {backgroundColor: COLORS.green, padding: 10, borderRadius: 7},
});
