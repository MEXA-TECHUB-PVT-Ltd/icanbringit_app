import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import InputField from '../../../components/InputFiled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from '../../../components/Text';
import COLORS from '../../../consts/colors';
import Images from '../../../consts/Images';
import RBSheet from 'react-native-raw-bottom-sheet';
import InnerButton from '../../../components/InnerButton/InnerButton';
import Custom_Button from '../../../components/button/Custom_Button';

const AttendeesList = () => {
  const [showInputField, setShowInputField] = useState(false);

  const handleSearchIconPress = () => {
    setShowInputField(!showInputField);
  };
  const refRBSheet = useRef();
  const refRBSheetAssignItem = useRef();

  const notificationData = [
    {
      id: 1,
      image: Images.profiledp,
      title: 'Olivia Martinez ',
      time: 'Female - 23',
      status: true,
      type: 'Accept',
    },
    {
      id: 2,
      image: Images.avatar,
      title: 'Olivia Martinez ',

      time: 'Female - 23',
      status: true,
      type: 'Ignore',
    },
    {
      id: 3,
      image: Images.profiledp,
      title: 'Olivia Martinez ',
      status: true,
      type: 'Accept',
      time: 'Female - 23',
    },
    {
      id: 4,
      image: Images.avatar,
      title: 'Olivia Martinez ',
      status: true,
      type: 'Ignore',
      time: 'Female - 23',
    },
    {
      id: 5,
      image: Images.profiledp,
      title: 'Olivia Martinez ',
      status: true,
      type: 'Accept',
      time: 'Female - 23',
    },
    {
      id: 5,
      image: Images.avatar,
      title: 'Olivia Martinez',
      time: 'Female - 23',
      status: false,
      type: 'Ignore',
    },
    {
      id: 5,
      image: Images.profiledp,
      title: 'Olivia Martinez',
      time: 'Female - 23',
      status: false,
      type: 'Accept',
    },
  ];
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
    <SafeAreaView style={{flex: 1, marginTop: '10%'}}>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {!showInputField ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'space-between',
                width: '86%',
              }}>
              <TouchableOpacity
                //  onPress={handleSearchIconPress}
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
              <CustomText
                text={'Attendees List'}
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: COLORS.black,
                  marginTop: 10,
                }}
              />
            </View>
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
            <InputField
              style={{height: 40, width: '100%'}}
              placeholder={'search here'}
            />
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
      <View style={{marginBottom: '20%'}}>
        <FlatList
          // ListHeaderComponent={() => <Text>Today</Text>}
          showsHorizontalScrollIndicator={false}
          data={notificationData}
          renderItem={({item, ind}) => (
            <View style={{paddingHorizontal: 20, paddingTop: 15}}>
              <View style={{height: 120}}>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Image
                    source={item.image}
                    style={{height: 50, width: 50, marginHorizontal: 10}}
                  />
                  <View style={{width: '60%'}}>
                    <CustomText
                      text={item.title}
                      style={{paddingTop: 10, fontWeight: 'bold'}}
                    />
                    <CustomText
                      text={item.time}
                      style={{fontSize: 12, marginTop: 11}}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    paddingRight: 20,
                  }}></View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    alignItems: 'center',
                    width: '90%',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => refRBSheet.current.open()}
                    style={{
                      backgroundColor: COLORS.green,
                      padding: 10,
                      marginRight: 10,
                      borderRadius: 10,
                      width: '45%',
                      alignItems: 'center',
                    }}>
                    <CustomText
                      text={'Assign Task'}
                      style={{color: COLORS.white, fontSize: 13}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.green,
                      padding: 10,
                      marginRight: 10,
                      borderRadius: 10,
                      width: '45%',
                      alignItems: 'center',
                    }}
                    onPress={() => refRBSheetAssignItem.current.open()}>
                    <CustomText
                      text={'Assign Item'}
                      style={{color: COLORS.white, fontSize: 13}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{height: 0.5, backgroundColor: COLORS.greylight}} />
            </View>
          )}
        />
      </View>
      {/* AssignTask */}
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
            height: '50%',
          },
        }}>
        <View>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomText
                text={'Assign Task'}
                style={{fontSize: 16, fontWeight: 'bold'}}
              />
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <AntDesign name="close" size={20} color={COLORS.black} />
              </TouchableOpacity>
            </View>
            <InputField placeholder={'Add Description'} style={{height: 100}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <InnerButton
                buttonText={'Start Date'}
                // onPress={() => navigation.navigate('WhichAnimal')}
                Lefticon={true}
                name="date-range"
                type={'MaterialIcons'}
                color={COLORS.black}
                size={20}
                style={{width: '45%'}}
              />
              <InnerButton
                buttonText={'Start Time'}
                Lefticon={true}
                name="time-outline"
                type={'ionicon'}
                color={COLORS.black}
                size={20}
                style={{width: '45%'}}
              />
            </View>
            <View style={{marginTop: 40}}>
              <Custom_Button title={'Assign'} />
            </View>
          </View>
        </View>
      </RBSheet>
      {/* AssignItem */}
      <RBSheet
        ref={refRBSheetAssignItem}
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
            height: '50%',
          },
        }}>
        <View>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomText
                text={'Assign Task'}
                style={{fontSize: 16, fontWeight: 'bold'}}
              />
              <TouchableOpacity
                onPress={() => refRBSheetAssignItem.current.close()}>
                <AntDesign name="close" size={20} color={COLORS.black} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <InnerButton
                buttonText={'Balloons & Banners'}
                // onPress={() => navigation.navigate('WhichAnimal')}

                style={{width: '45%', alignItems:'center'}}
              />
              <InnerButton buttonText={'Party Favors'} style={{width: '30%'}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <InnerButton
                buttonText={'Cake & Treats'}
                // onPress={() => navigation.navigate('WhichAnimal')}

                style={{width: '35%', alignItems:'center'}}
              />
              <InnerButton buttonText={'Decorations'} style={{width: '30%'}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <InnerButton
                buttonText={'Themed Costumes'}
                // onPress={() => navigation.navigate('WhichAnimal')}

                style={{width: '45%', alignItems:'center'}}
              />
              <InnerButton buttonText={'Tableware'} style={{width: '30%'}} />
            </View>


            <View style={{marginTop: 40}}>
              <Custom_Button title={'Assign'} />
            </View>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default AttendeesList;

const styles = StyleSheet.create({});
