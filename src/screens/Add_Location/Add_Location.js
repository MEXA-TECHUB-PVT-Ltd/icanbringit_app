import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View, TouchableOpacity, Text} from 'react-native'

import styles from './styles'
import Back from '../../assets/svgs/back.svg'

function SignIn({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
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

          <Text style={styles.txt1}>Add Location</Text>
          <Text style={styles.txt}>
            To provide you with the best experience, we need access to your device location.
          </Text>
          <View style={{marginHorizontal: '7%', marginTop: '0%'}}>
            {/* <Image source={appImages.pin_map} style={styles.map} /> */}

            <View
              style={{
                alignSelf: 'center',
                marginTop: '33%',
                marginBottom: '5%',
              }}>
              {/* <CustomButton
                title="Use my Current Location"
                load={false}
                // checkdisable={inn == '' && cm == '' ? true : false}
                customClick={() => {
                  navigation.navigate('Select_preferences')
                }}
              /> */}

              {/* <Button
                disabled={false}
                mode="contained"
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
                style={styles.button}
                contentStyle={{
                  padding: '1%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                loading={false}
                labelStyle={{
                  fontSize: widthPercentageToDP(4),
                  // paddingTop: '1%',
                  fontFamily: 'Montserrat-Medium',
                  color: '#1B1464',
                  alignSelf: 'center',
                }}>
                Add Location
              </Button> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
