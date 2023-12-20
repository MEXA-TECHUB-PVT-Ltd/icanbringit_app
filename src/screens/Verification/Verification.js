import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  LogBox,
  StatusBar,
} from 'react-native'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import FlashMessage, {showMessage} from 'react-native-flash-message'

import CustomButton from '../../components/button/Custom_Button'
import styles from './styles'
import FVR_headers from '../../components/button/FVR_headers'
import { colors } from '../../themes'

const CELL_COUNT = 4
LogBox.ignoreAllLogs()

const App = ({navigation}) => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  const [count, setCount] = useState(59)
  useEffect(() => {
    if (count !== 0) {
      setTimeout(() => {
        setCount(count - 1)
      }, 1000)
    }
  }, [count])

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: colors.fresh_air}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <FVR_headers
            title="Verification"
            title1="We have sent you a verification code on your provided email."
          />

          <View style={styles.root}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

          <View style={{alignSelf: 'center'}}>
            <Text style={[styles.txt1, {color: colors.primary}]}>
              Resend Code <Text style={{color: colors.davy_grey}}>in 00 : {count}</Text>
            </Text>
          </View>

          <View style={{alignSelf: 'center', marginTop: '70%', marginBottom: '3%'}}>
            <CustomButton
              title="Verify"
              load={false}
              // checkdisable={inn == '' && cm == '' ? true : false}
              customClick={() => {
                showMessage({
                  message: 'Success',
                  description: 'Email Verified Successfully',
                  type: 'success',
                })
                setTimeout(() => {
                  navigation.navigate('Reset_Password')
                }, 3000)
              }}
            />
          </View>
          <FlashMessage position="top" />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn')
            }}
            activeOpacity={0.7}
            style={styles.btn2}>
            <Text style={styles.txt3}>Change Email Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
