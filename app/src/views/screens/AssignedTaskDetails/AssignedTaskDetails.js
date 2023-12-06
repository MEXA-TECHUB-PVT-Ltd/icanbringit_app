import {
    Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Back from './../../../assets/svg/back.svg';
import CustomText from '../../../components/Text';
import COLORS from '../../../consts/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Images from '../../../consts/Images';

const AssignedTaskDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
     
      <View
        style={{
          flexDirection: 'row',
          marginTop: '15%',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back width={35} height={35} />
        </TouchableOpacity>
        <CustomText
          text={'Assigned Tasks'}
          style={{
            alignSelf: 'center',
            marginLeft: 60,
            fontSize: 18,
            fontWeight: 'bold',
          }}
        />
      </View>

      <ScrollView>



      <View style={{marginHorizontal: 20}}>
        <CustomText
          text={'Task # 1'}
          style={{
            marginTop: 20,
            color: COLORS.green,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
        <CustomText
          text={'Buy Decoration Things'}
          style={{
            marginTop: 20,
            color: COLORS.black,
            fontWeight: 'bold',
            fontSize: 14,
          }}
        />
        <CustomText
          text={'Nov 27, 2023 - 03:00 pm'}
          style={{color: COLORS.grey, fontSize: 12, marginTop:10}}
        />
          <CustomText
          text={'Your task is to buy decorations that reflect your personal style and create a welcoming environment. Begin by exploring local home decor stores or online platforms to find a diverse range of items, such as wall art, vases, cushions, or any other decorative pieces that catch your eye.'}
          style={{color: COLORS.grey, fontSize: 12, marginTop:10}}
        />
         <CustomText
          text={'Available on'}
          style={{
            marginTop: 20,
            color: COLORS.green,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
         <View style={{ marginTop: 30}}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('AssignedTaskDetails')}
            style={{
              backgroundColor: COLORS.blue,
              paddingVertical: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <CustomText text={'Assigned Task'} style={{color: COLORS.white}} /> */}
            <Image source={Images.amazon} resizeMode='contain' style={{ height:20}}/>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
         <CustomText
          text={'Task # 2'}
          style={{
            marginTop: 20,
            color: COLORS.green,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
        <CustomText
          text={'Buy a Wooden Table'}
          style={{
            marginTop: 20,
            color: COLORS.black,
            fontWeight: 'bold',
            fontSize: 14,
          }}
        />
        <CustomText
          text={'Nov 27, 2023 - 03:00 pm'}
          style={{color: COLORS.grey, fontSize: 12, marginTop:10}}
        />
            <CustomText
          text={'Your task is to buy decorations that reflect your personal style and create a welcoming environment. Begin by exploring local home decor stores or online platforms to find a diverse range of items, such as wall art, vases, cushions, or any other decorative pieces that catch your eye.'}
          style={{color: COLORS.grey, fontSize: 12, marginTop:10}}
        />
         <CustomText
          text={'Available on'}
          style={{
            marginTop: 20,
            color: COLORS.green,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
         <View style={{ marginTop: 30}}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('AssignedTaskDetails')}
            style={{
              backgroundColor: COLORS.blue,
              paddingVertical: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <CustomText text={'Assigned Task'} style={{color: COLORS.white}} /> */}
            <Image source={Images.amazon} resizeMode='contain' style={{ height:20}}/>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
        <CustomText
          text={'Available on'}
          style={{
            marginTop: 20,
            color: COLORS.green,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
         <View style={{ marginTop: 30}}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('AssignedTaskDetails')}
            style={{
              backgroundColor: COLORS.blue,
              paddingVertical: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <CustomText text={'Assigned Task'} style={{color: COLORS.white}} /> */}
            <Image source={Images.amazon} resizeMode='contain' style={{ height:20}}/>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{height:100}}/> */}
            </ScrollView>
    </SafeAreaView>
  );
};

export default AssignedTaskDetails;

const styles = StyleSheet.create({});
