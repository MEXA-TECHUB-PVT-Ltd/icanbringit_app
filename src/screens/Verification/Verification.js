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
import CustomLoader from '../../components/common/CustomLoader'
import FVR_headers from '../../components/button/FVR_headers'

import {globalStyles as gs} from '../../styles'
import {colors} from '../../themes'
import styles from './styles'

import {verifyOtp} from '../../redux/slices/auth/verifyOtpSlice'
import {useDispatch, useSelector} from 'react-redux'
import {formatTime} from '../../utils/helpers/HelperFunctions'

const CELL_COUNT = 4
LogBox.ignoreAllLogs()

const App = ({navigation, route}) => {
  const {email} = route.params

  const dispatch = useDispatch()
  const {loading, data, error} = useSelector(state => state.verifyOtp)

  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  const [count, setCount] = useState(59)
  const [resendCode, setResendCode] = useState(false)
  const [timeLeft, setTimeLeft] = useState(59)

  const onVerification = async () => {
    dispatch(verifyOtp({email, otp: Number(value)}))
    if (data?.status) {
      showMessage({
        message: 'Success',
        description: data.message,
        type: 'success',
      })
      navigation.navigate('Reset_Password', {email})
    } else if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'error',
      })
    }
  }

  const onResendCode = async () => {
    // dispatch(resendVerificationCode({email}))
    setResendCode(true)
    startTimer()
  }

  useEffect(() => {
    if (count !== 0) {
      setTimeout(() => {
        setCount(count - 1)
      }, 1000)
    }
  }, [count])

  useEffect(() => {
    startTimer()
  }, [])

  const startTimer = () => {
    const interval = setInterval(() => {
      if (timeLeft === 0) {
        clearInterval(interval)
        setResendCode(true)
      } else {
        setTimeLeft(prevTimeLeft => Math.max(0, prevTimeLeft - 1))
      }
    }, 1000)
  }

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={{backgroundColor: colors.fresh_air}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
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

          <View style={styles.alignSelfCenter}>
            {resendCode ? (
              <TouchableOpacity activeOpacity={0.7} onPress={onResendCode}>
                <Text style={[styles.txt1, {color: colors.primary}]}>
                  Resend Code.{' '}
                  <Text style={{color: colors.davy_grey}}>in {formatTime(timeLeft)}</Text>
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.txt1, {color: colors.primary}]}>
                Resend Code <Text style={{color: colors.davy_grey}}>in {formatTime(timeLeft)}</Text>
              </Text>
            )}
          </View>

          <View style={styles.btn}>
            <CustomButton title="Verify" load={false} customClick={onVerification} />
          </View>
          <FlashMessage position="top" />
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            activeOpacity={0.7}
            style={styles.btn2}>
            <Text style={styles.txt3}>Change Email Address</Text>
          </TouchableOpacity>
        </View>
        {!!loading && <CustomLoader />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
