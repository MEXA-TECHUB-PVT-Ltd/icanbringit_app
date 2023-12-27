import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, View, LogBox, StatusBar} from 'react-native'

import FlashMessage, {showMessage} from 'react-native-flash-message'
import {Formik} from 'formik'

import CustomButton from '../../components/button/Custom_Button'
import FVR_headers from '../../components/button/FVR_headers'
import {resetPasswordValidationSchema} from '../../utils/Validations'
import InputField from '../../components/InputFiled'
import CustomText from '../../components/Text'

import {colors} from '../../themes'
import {globalStyles as gs} from '../../styles'
import styles from './styles'

import {useDispatch, useSelector} from 'react-redux'
import {resetPass} from '../../redux/slices/auth/resetPassSlice'

LogBox.ignoreAllLogs()

const App = ({navigation, route}) => {
  const email = route?.params.email

  const state = useSelector(state => state.resetPass)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    password: '',
    confirmPassword: '',
  })

  const onResetPass = async values => {
    const credentials = {email: email, new_password: values.password}
    dispatch(resetPass(credentials))
  }

  useEffect(() => {
    if (state?.data?.status) {
      showMessage({
        message: 'Success',
        description: state.data.message,
        type: 'success',
      })
      navigation.navigate('SignIn')
    }
  }, [state?.data])

  useEffect(() => {
    if (state?.error) {
      showMessage({
        message: 'Error',
        description: state?.error,
        type: 'error',
      })
    }
  }, [state?.error])

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={{backgroundColor: colors.fresh_air}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
        <View style={styles.mainView}>
          <FVR_headers title="Reset Password" title1="Create a strong password." />
          <Formik
            initialValues={userData}
            validateOnMount={true}
            onSubmit={values => onResetPass(values)}
            validationSchema={resetPasswordValidationSchema}>
            {({handleSubmit, handleChange, handleBlur, values, touched, errors}) => (
              <View style={styles.mainView}>
                <View style={styles.inputMg}>
                  <InputField
                    placeholder={'password'}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    secureText={true}
                    icon={true}
                    Lefticon={true}
                    name="lock"
                    type={'SimpleLineIcons'}
                    color={colors.grey}
                    size={18}
                    style={styles.input}
                  />
                  {errors.password && touched.password && (
                    <CustomText text={errors.password} style={styles.errors} />
                  )}
                  <InputField
                    placeholder={'Re-type Password'}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    secureText={true}
                    icon={true}
                    Lefticon={true}
                    name="lock"
                    type={'SimpleLineIcons'}
                    color={colors.quartz}
                    size={18}
                    style={styles.input}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <CustomText text={errors.confirmPassword} style={styles.errors} />
                  )}
                </View>
                <View style={styles.btnContainer}>
                  <CustomButton
                    title="Reset"
                    load={false}
                    customClick={() => handleSubmit(values)}
                  />
                </View>
              </View>
            )}
          </Formik>
          <FlashMessage position="top" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
