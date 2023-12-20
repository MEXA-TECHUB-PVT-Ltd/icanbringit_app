import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View, TouchableOpacity, Text} from 'react-native'

import styles from './styles'
import Back from '../../assets/svgs/back.svg'
import {colors} from '../../themes'
import {globalStyles as gs} from '../../styles'

function SignIn({navigation}) {
  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
        <View style={styles.mainView}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <Back width={35} height={35} style={styles.icon} />
          </TouchableOpacity>

          <Text style={styles.txt1}>Add Location</Text>
          <Text style={styles.txt}>
            To provide you with the best experience, we need access to your device location.
          </Text>
          <View style={styles.dividerCont}>
            <View style={styles.divider} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
