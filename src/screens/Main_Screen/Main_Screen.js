import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native'

import {Text, Divider} from 'react-native-paper'
import COLORS from '../../themes/colors'
import appImages from './../../constants/Images'
import CustomButton from '../../components/button/Custom_Button'

import styles from './styles'

function Onboarding({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <Image source={appImages.f5} style={styles.image} resizeMode={'contain'} />
          <Text style={styles.txt1}>I Can Bring It!</Text>

          <View style={styles.v1}>
            <View style={{alignSelf: 'center', marginTop: '7%', marginBottom: '3%'}}>
              <CustomButton
                title="Create Account"
                load={false}
                // checkdisable={inn == '' && cm == '' ? true : false}
                customClick={() => {
                  navigation.navigate('SignUp')
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn')
              }}
              activeOpacity={0.7}
              style={styles.btn2}>
              <Text style={styles.txt3}>Already have an account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bigview}>
            <Divider style={styles.divider} />
            <Text style={{color: COLORS.grey, fontSize: 15}}> or continue with </Text>
            <Divider style={styles.divider} />
          </View>

          <View style={[styles.v2, {width: Platform.OS === 'ios' ? '60%' : '40%'}]}>
            <Image source={appImages.f} style={styles.img} />
            <Image source={appImages.g} style={styles.img} />
            {Platform.OS === 'ios' && <Image source={appImages.a} style={styles.img} />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Onboarding
