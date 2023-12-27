import React from 'react'
import {SafeAreaView, StatusBar, Image, View, TouchableOpacity} from 'react-native'

import {Text, Divider} from 'react-native-paper'

import Colors from '../../themes/colors'
import images from '../../constants/images'
import CustomButton from '../../components/button/Custom_Button'

import styles from './styles'
import {isIos} from '../../utils/helpers/Dimensions'
import {globalStyles as gs} from '../../styles'
import {colors} from '../../themes'

function Onboarding({navigation}) {
  return (
    <SafeAreaView style={gs.fill}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.transparent}
        translucent={true}
      />
      <View style={styles.mainView}>
        <Image source={images.f5} style={styles.image} resizeMode={'contain'} />
        <Text style={styles.txt1}>I Can Bring It!</Text>

        <View style={styles.v1}>
          <View style={{alignSelf: 'center', marginTop: '7%', marginBottom: '3%'}}>
            <CustomButton
              title="Create Account"
              load={false}
              customClick={() => navigation.navigate('SignUp')}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            activeOpacity={0.7}
            style={styles.btn2}>
            <Text style={styles.txt3}>Already have an account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bigview}>
          <Divider style={styles.divider} />
          <Text style={{color: Colors.quartz, fontSize: 15}}> or continue with </Text>
          <Divider style={styles.divider} />
        </View>

        <View style={[styles.v2, {width: isIos ? '60%' : '40%'}]}>
          <Image source={images.facebook} style={styles.img} />
          <Image source={images.google} style={styles.img} />
          {isIos && <Image source={images.apple} style={styles.img} />}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding
