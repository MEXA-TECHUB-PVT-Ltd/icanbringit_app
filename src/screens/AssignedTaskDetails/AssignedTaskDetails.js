import React from 'react'
import {Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../themes/Colors'
import Back from '../../assets/svgs/back.svg'
import CustomText from '../../components/Text'
import images from '../../constants/images'
import {globalStyles as gs, globalMarginStyles as gms} from '../../styles'
import {theme} from '../../themes'

const AssignedTaskDetails = ({navigation}) => {
  return (
    <SafeAreaView style={gs.fill}>
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
            navigation.goBack()
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
        <View style={gms.mh20}>
          <CustomText text={'Task # 1'} style={styles.boldText} />
          <CustomText
            text={'Buy Decoration Things'}
            style={{
              marginTop: 20,
              color: Colors.black,
              fontWeight: 'bold',
              fontSize: 14,
            }}
          />
          <CustomText
            text={'Nov 27, 2023 - 03:00 pm'}
            style={{color: Colors.quartz, fontSize: theme.light.fontSize.xs, marginTop: 10}}
          />
          <CustomText
            text={
              'Your task is to buy decorations that reflect your personal style and create a welcoming environment. Begin by exploring local home decor stores or online platforms to find a diverse range of items, such as wall art, vases, cushions, or any other decorative pieces that catch your eye.'
            }
            style={{color: Colors.quartz, fontSize: theme.light.fontSize.xs, marginTop: 10}}
          />
          <CustomText text={'Available on'} style={styles.boldText} />
          <View style={gms.mt30}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AssignedTaskDetails')}
              style={{
                backgroundColor: colors.skye_blue,
                paddingVertical: 15,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image source={images.amazon} resizeMode="contain" style={{height: 20}} />
              <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <CustomText text={'Task # 2'} style={styles.boldText} />
          <CustomText
            text={'Buy a Wooden Table'}
            style={{
              marginTop: 20,
              color: Colors.black,
              fontWeight: 'bold',
              fontSize: 14,
            }}
          />
          <CustomText
            text={'Nov 27, 2023 - 03:00 pm'}
            style={{color: Colors.quartz, fontSize: 12, marginTop: 10}}
          />
          <CustomText
            text={
              'Your task is to buy decorations that reflect your personal style and create a welcoming environment. Begin by exploring local home decor stores or online platforms to find a diverse range of items, such as wall art, vases, cushions, or any other decorative pieces that catch your eye.'
            }
            style={{color: Colors.quartz, fontSize: 12, marginTop: 10}}
          />
          <CustomText text={'Available on'} style={styles.boldText} />
          <View style={gms.mt30}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AssignedTaskDetails')}
              style={{
                backgroundColor: colors.skye_blue,
                paddingVertical: 15,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image source={images.amazon} resizeMode="contain" style={{height: 20}} />
              <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <CustomText text={'Available on'} style={styles.boldText} />
          <View style={gms.mt30}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AssignedTaskDetails')}
              style={{
                backgroundColor: colors.skye_blue,
                paddingVertical: 15,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image source={images.amazon} resizeMode="contain" style={{height: 20}} />
              <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AssignedTaskDetails

const styles = StyleSheet.create({
  boldText: {
    ...gms.mt20,
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: theme.light.fontSize.md,
  },
})
