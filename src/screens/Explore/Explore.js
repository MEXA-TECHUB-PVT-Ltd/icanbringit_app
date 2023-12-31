import React, {useRef, useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native'

import RBSheet from 'react-native-raw-bottom-sheet'
import {Picker} from '@react-native-picker/picker'
import FastImage from 'react-native-fast-image'
import DatePicker from 'react-native-date-picker'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Colors from '../../themes/colors'
import images from '../../constants/images'
import CustomText from '../../components/Text'
import Icon from '../../constants/Icons'
import InnerButton from '../../components/InnerButton/InnerButton'
import Custom_Button from '../../components/button/Custom_Button'
import {colors} from '../../themes'
import { globalMarginStyles as gms } from '../../styles'

const Explore = ({navigation}) => {
  const ref_RBSheetCamera = useRef(null)
  const [selectedGender, setSelectedGender] = useState('Select Type')
  const genderOptions = [
    {label: 'Select Type', value: 'Select Gender'},
    {label: 'Online', value: 'Online'},
  ]

  const [selectedCategory, setSelectedCategory] = useState('Select Type')
  const categoryOptions = [
    {label: 'Select Category', value: 'Select Category'},
    {label: 'Category1', value: 'Category1'},
    {label: 'Category2', value: 'Category2'},
    {label: 'Category3', value: 'Category3'},
    {label: 'Category4', value: 'Category4'},
    {label: 'Category5', value: 'Category5'},
  ]
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const PartiesData = [
    {
      id: 1,
      image: images.partiesBg1,
      title: 'Candyland Carnival',
      time: 'Sun, Oct 29 - 5:00 pm',
      online: 'online',
      privte: 'private',
    },
    {
      id: 2,
      image: images.partiesBg1,
      title: 'Candyland Carnival',
      time: 'Sun, Oct 29 - 5:00 pm',
      online: 'online',
      privte: 'private',
    },
    {
      id: 3,
      image: images.partiesBg1,
      title: 'Candyland Carnival',
      time: 'Sun, Oct 29 - 5:00 pm',
      online: 'online',
      privte: 'private',
    },
  ]
  return (
    <SafeAreaView
      style={{flexGrow: 1, backgroundColor: Colors.white, paddingHorizontal: 20, paddingTop: 25}}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row'}}>
          <Image source={images.locationIcon} />
          <View style={{paddingHorizontal: 20}}>
            <Text>Your location</Text>
            <Text>123 Elm Street...</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Image source={images.NotificationsIcon} style={{marginRight: 20}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ref_RBSheetCamera.current.open()}>
            <Image source={images.filterIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 50,
          borderWidth: 0.5,
          borderColor: colors.old_silver,
          borderRadius: 10,
          marginTop: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
        }}>
        <View style={{justifyContent: 'center'}}>
          <AntDesign name="search1" size={24} />
        </View>
        <TextInput placeholder="Search events"></TextInput>
      </View>
      <ScrollView style={{flexGrow: 1, marginTop: 20}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: Colors.black}}>AI Suggestions</Text>
          <TouchableOpacity>
            <Text style={{color: Colors.spanish_grey, textDecorationLine: 'underline'}}>
              Suggest More
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.flatlist_container}>
            <FastImage
              source={images.suggestionBG1}
              style={{height: 150, width: 150}}
              resizeMode="contain">
              <View style={styles.cardInnerView}>
                <CustomText text={''} style={styles.txt} />
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name={'access-time'}
                    type={'MaterialIcons'}
                    color={'white'}
                    size={15}
                    style={gms.mt5}
                  />
                  <CustomText text={'19 Dec 2023 - 02:00'} style={[styles.txt, {marginLeft: 5}]} />
                </View>
              </View>
            </FastImage>
          </View>
          <View style={styles.flatlist_container}>
            <FastImage
              source={images.SuggestionBG1}
              style={{height: 150, width: 150}}
              resizeMode="contain">
              <View style={styles.cardInnerView}>
                <CustomText text={''} style={styles.txt} />
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name={'access-time'}
                    type={'MaterialIcons'}
                    color={'white'}
                    size={15}
                    style={{marginTop: 5}}
                  />
                  <CustomText text={'19 Dec 2023 - 02:00'} style={[styles.txt, {marginLeft: 5}]} />
                </View>
              </View>
            </FastImage>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginTop: 20,
          }}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>Parties</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Parties')}>
            <Text style={{color: Colors.spanish_grey, textDecorationLine: 'underline'}}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            // numColumns={2}
            data={PartiesData}
            horizontal
            renderItem={({item}) => {
              return (
                <View style={styles.flatlist_container2}>
                  <TouchableOpacity onPress={() => navigation.navigate('ViewEvent')}>
                    <Image source={item.image} resizeMode="contain" style={styles.imageView} />
                    <CustomText text={item.title} style={styles.titleView} />
                    <CustomText text={item.time} style={styles.timeView} />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <TouchableOpacity style={styles.cardBtn}>
                        <CustomText text={item.online} />
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.cardBtn, {backgroundColor: colors.orange}]}>
                        <CustomText text={item.privte} style={styles.textView} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text>Concerts</Text>
          <TouchableOpacity>
            <Text style={{color: Colors.spanish_grey, textDecorationLine: 'underline'}}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            // numColumns={2}
            data={PartiesData}
            horizontal
            renderItem={({item}) => {
              return (
                <View style={[styles.flatlist_container2, {width: 220}]}>
                  <Image source={item.image} resizeMode="contain" style={styles.imageView} />
                  <CustomText text={item.title} style={styles.titleView} />
                  <CustomText text={item.time} style={styles.timeView} />
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <TouchableOpacity style={styles.cardBtn}>
                      <CustomText text={item.online} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cardBtn, {backgroundColor: colors.orange}]}>
                      <CustomText text={item.privte} style={styles.textView} />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }}
          />
        </View>
        <View style={{marginBottom: 80}} />
      </ScrollView>

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
            backgroundColor: Colors.old_silver_o2,
            height: 3,
            width: 50,
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: '60%',
          },
        }}>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <CustomText style={styles.titleText} text={'Apply Filter'} />
          {/* Select type */}
          <CustomText
            text={'Event Type'}
            style={{
              fontSize: 14,
              marginTop: 10,
              color: Colors.black,
              fontWeight: 'bold',
            }}
          />
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
                <Picker.Item key={index} label={gender.label} value={gender.value} />
              ))}
            </Picker>
          </View>
          {/* Select Category */}
          <CustomText
            text={'Select Category'}
            style={{
              fontSize: 14,
              marginTop: 10,
              color: Colors.black,
              fontWeight: 'bold',
            }}
          />

          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'black',
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={itemValue => setSelectedCategory(itemValue)}
              style={styles.picker}>
              {categoryOptions.map((gender, index) => (
                <Picker.Item key={index} label={gender.label} value={gender.value} />
              ))}
            </Picker>
          </View>
          {/* Date */}
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />

          <CustomText
            text={'Select Date'}
            style={{
              fontSize: 14,
              marginTop: 10,
              color: Colors.black,
              fontWeight: 'bold',
            }}
          />
          <InnerButton
            Lefticon={true}
            buttonText={date.toDateString()}
            onPress={() => setOpen(true)}
            name="calendar"
            type={'feather'}
            color={Colors.black}
            size={20}
          />
          <View style={{marginTop: 20, alignSelf: 'center'}}>
            <Custom_Button title={'Apply'} />
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default Explore

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  flatlist_container: {
    height: 200,
    // padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    // backgroundColor:'red'
    width: '45%',
  },
  cardInnerView: {
    // alignItems:'flex-end',
    marginTop: '65%',
    backgroundColor: 'rgba(120, 120, 120,0.9)',
    width: '90%',
    alignSelf: 'center',
    height: '30%',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  txt: {
    color: Colors.white,
    fontSize: 10,
    marginTop: 5,
  },
  flatlist_container2: {
    height: 230,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: Colors.black,
    borderWidth: 0.5,
    width: 160,
  },
  titleView: {
    color: Colors.primary,
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  imageView: {
    width: 160,
    alignSelf: 'center',
  },
  timeView: {
    marginHorizontal: 10,
  },
  cardBtn: {
    backgroundColor: Colors.spanish_grey,
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
  },
  textView: {
    color: Colors.white,
  },
  titleText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
})
