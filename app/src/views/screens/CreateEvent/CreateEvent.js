import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  LogBox,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import Back from './../../../assets/svg/back.svg';
import COLORS from '../../../consts/colors';
import InputField from '../../../components/InputFiled';
import {Picker} from '@react-native-picker/picker';
import Images from '../../../consts/Images';
import InnerButton from '../../../components/InnerButton/InnerButton';

LogBox.ignoreAllLogs();

const CreateEvent = () => {
  const isFocused = useIsFocused();
  const [clickedId, setclickedId] = useState();
  const [clickedId1, setclickedId1] = useState();
  const [clickedId2, setclickedId2] = useState();
  const [count, setcount] = useState(0);

  const [progressImages, setProgressImages] = useState([
    require('../../../assets/images/progress1.png'),
    require('../../../assets/images/progress1.png'),
    require('../../../assets/images/progress1.png'),
    require('../../../assets/images/progress1.png'),
  ]);
  const [selectedGender, setSelectedGender] = useState('Select Category'); // Default gender value

  const genderOptions = [
    {label: 'Select Category', value: 'Select Category'},
    {label: 'Online', value: 'Online'},
  ];

  const [fm, setfm] = useState([
    {
      id: 1,
      head: 'Conferences',
    },
  ]);

  const [sd, setsd] = useState([
    {
      id: 1,
      head: 'With in my City ',
    },
  ]);

  const [bs, setbs] = useState([
    {
      id: 1,
      head: 'Vegetarian ',
    },
  ]);
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#ffff'}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <View style={styles.mainView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}>
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

          <Text style={styles.txt}>Create Event</Text>
          {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {progressImages.map((image, index) => (
                  <Image
                  resizeMode='contain'
                    key={index}
                    source={image}
                    style={{ width: 70, height: 60, marginHorizontal: 5 , backgroundColor:'red'}}
                  />
                ))}
              </View> */}
          <View style={{marginHorizontal: '7%', marginTop: '10%'}}>
            {count === 1 ? (
              <View style={{}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <Image
                    source={Images.progress1}
                    resizeMode="contain"
                    style={{height: 60, alignSelf: 'flex-end'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <InnerButton
                    buttonText={'Start Date'}
                    // onPress={() => navigation.navigate('WhichAnimal')}
                    Lefticon={true}
                    name="user"
                    type={'feather'}
                    color={COLORS.black}
                    size={20}
                    style={{width: '45%'}}
                  />
                  <InnerButton
                    buttonText={'Start Time'}
                    Lefticon={true}
                    name="user"
                    type={'feather'}
                    color={COLORS.black}
                    size={20}
                    style={{width: '45%'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <InnerButton
                    buttonText={'End Date'}
                    Lefticon={true}
                    name="user"
                    type={'feather'}
                    color={COLORS.black}
                    size={20}
                    style={{width: '45%'}}
                  />
                  <InnerButton
                    buttonText={'End Time'}
                    Lefticon={true}
                    name="user"
                    type={'feather'}
                    color={COLORS.black}
                    size={20}
                    style={{width: '45%'}}
                  />
                </View>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    marginTop: 10,
                    borderRadius: 10,
                  }}>
                  <Picker
                    selectedValue={selectedGender}
                    onValueChange={itemValue => setSelectedGender(itemValue)}
                    style={styles.picker}>
                    {genderOptions.map((gender, index) => (
                      <Picker.Item
                        key={index}
                        label={gender.label}
                        value={gender.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            ) : count === 2 ? (
              <View style={{}}>
                <View style={{marginTop: 10}}></View>
                <TextInput
                  placeholder="Event Details"
                  multiline={true}
                  numberOfLines={3}
                  style={{
                    flex: 1,
                    height: 100,
                    borderRadius: 10,
                    borderColor: COLORS.black,
                    borderWidth: 0.5,
                  }}
                />
                <InputField placeholder={'No. of Guests'} />
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    marginTop: 10,
                    borderRadius: 10,
                  }}>
                  <Picker
                    selectedValue={selectedGender}
                    onValueChange={itemValue => setSelectedGender(itemValue)}
                    style={styles.picker}>
                    {genderOptions.map((gender, index) => (
                      <Picker.Item
                        key={index}
                        label={gender.label}
                        value={gender.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            ) :  count === 3 ? (
                <View style={{}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <Image
                    source={Images.progress1}
                    resizeMode="contain"
                    style={{height: 60, alignSelf: 'flex-end'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <InnerButton
                    buttonText={'Balloons & Banners'}
                    // onPress={() => navigation.navigate('WhichAnimal')}
                   
                    style={{width: '55%'}}
                  />
                  <InnerButton
                    buttonText={'Party Favors'}
                    style={{width: '30%'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <InnerButton
                    buttonText={'Cake & Treats'}
                    style={{width: '45%'}}
                  />
                  <InnerButton
                    buttonText={'Decorations'}
                    style={{width: '45%'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <InnerButton
                    buttonText={'Themed Costumes'}
                    style={{width: '45%'}}
                  />
                  <InnerButton
                    buttonText={'Tableware'}
                    style={{width: '45%'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <InnerButton
                    buttonText={'Photobooth Props'}
                    style={{width: '45%'}}
                  />
                  <InnerButton
                    buttonText={'Games & Activities'}
                    style={{width: '45%'}}
                  />
                </View>
            
              </View>
              ) : (
              <View style={{}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <Image
                    source={Images.progress1}
                    resizeMode="contain"
                    style={{height: 60, alignSelf: 'flex-end'}}
                  />
                </View>
                <InputField placeholder={'Event Title'}/>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'black',
                    marginTop: 10,
                    borderRadius: 10,
                  }}>
                  <Picker
                    selectedValue={selectedGender}
                    onValueChange={itemValue => setSelectedGender(itemValue)}
                    style={styles.picker}>
                    {genderOptions.map((gender, index) => (
                      <Picker.Item
                        key={index}
                        label={gender.label}
                        value={gender.value}
                      />
                    ))}
                  </Picker>
                </View>
                <View style={{marginTop: 10}}></View>
                <Image
                  source={Images.coverPhoto}
                  resizeMode="contain"
                  style={{width: '100%'}}
                />
              </View>
            )}
            <View style={styles.v1}>
              {/* <Text style={styles.txt1}>
                  {count}
                  <Text style={styles.txt2}>/3</Text>
                </Text> */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.btnl, {backgroundColor: '#1B1464'}]}
                onPress={() => {
                  setcount(count + 1);
                  if (count >= 3) {
                    //   navigation.navigate('Thank_you');
                  }
                }}>
                <Text style={{color: COLORS.white}}>Save And Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;
