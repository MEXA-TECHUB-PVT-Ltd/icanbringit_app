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

import FVR_headers from '../../components/button/FVR_headers'
import CustomButton from '../../components/button/Custom_Button'
import CustomLoader from '../../components/common/CustomLoader'

import {globalStyles as gs} from '../../styles'
import styles from './styles'
import {colors} from '../../themes'

import {useDispatch, useSelector} from 'react-redux'
import {verifyOtp} from '../../redux/slices/auth/verifyOtpSlice'
import {formatTime} from '../../utils/helpers/HelperFunctions'

const CELL_COUNT = 4
LogBox.ignoreAllLogs()

const App = ({navigation, route}) => {
  const {email, id} = route.params

  const dispatch = useDispatch()
  const {loading, data, error} = useSelector(state => state.verifyOtp)

  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  const [resendCode, setResendCode] = useState(false)
  const [timeLeft, setTimeLeft] = useState(59)

  const onResendCode = async () => {
    setResendCode(true)
    startTimer()
  }

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

  const onVerification = async () => dispatch(verifyOtp({email, otp: Number(value)}))

  useEffect(() => {
    if (data?.status) {
      showMessage({
        message: 'Success',
        description: data.message,
        type: 'success',
      })
      navigation.navigate('Tell_Us_About_Yourself', {user_id: id})
    }
  }, [data])

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'error',
      })
    }
  }, [error])

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={{backgroundColor: colors.fresh_air}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
        <View style={gs.fill}>
          <FVR_headers
            title="Email Verification"
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
          <View style={styles.primaryBtn}>
            <CustomButton title="Verify" load={false} customClick={onVerification} />
          </View>

          <FlashMessage position="top" />

          <TouchableOpacity activeOpacity={0.7} style={styles.btn2}>
            <Text style={styles.txt3}>Change Email Address</Text>
          </TouchableOpacity>
        </View>
        {!!loading && <CustomLoader />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
