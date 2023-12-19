import React from 'react'
import {SafeAreaView, ScrollView, View, LogBox, StatusBar} from 'react-native'

import FlashMessage, {showMessage} from 'react-native-flash-message'
import {Formik} from 'formik'

import CustomButton from '../../components/button/Custom_Button'
import styles from './styles'
import FVR_headers from '../../components/button/FVR_headers'
import {resetPasswordValidationSchema} from '../../utils/Validations'
import InputField from '../../components/InputFiled'
import CustomText from '../../components/Text'
import COLORS from '../../themes/colors'

LogBox.ignoreAllLogs()

const App = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#ADDAFA'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <FVR_headers title="Reset Password" title1="Create a strong password." />
          {/* <View style={{ marginHorizontal: '7%', marginTop: '25%' }}>
                        <PasswordInput title={'Your password'} />
                        <PasswordInput title={'Confirm password'} />
                    </View> */}
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validateOnMount={true}
            onSubmit={(values, {setSubmitting, setValues}) =>
              RegisterUser(values, {setSubmitting, setValues})
            }
            validationSchema={resetPasswordValidationSchema}>
            {({handleSubmit, handleChange, handleBlur, values, touched, errors, isValid}) => (
              <View style={styles.mainView}>
                <View style={{marginHorizontal: '7%', marginTop: '8%'}}>
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
                    color={'gray'}
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
                    color={COLORS.iconColor}
                    size={18}
                    style={styles.input}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <CustomText text={errors.confirmPassword} style={styles.errors} />
                  )}
                </View>

                <View
                  style={{
                    alignSelf: 'center',
                    marginTop: '70%',
                    marginBottom: '5%',
                  }}>
                  <CustomButton
                    title="Reset"
                    load={false}
                    // checkdisable={inn == '' && cm == '' ? true : false}
                    customClick={() => {
                      showMessage({
                        message: 'Success',
                        description: 'Password reset successfully',
                        type: 'success',
                      })
                      setTimeout(() => {
                        navigation.navigate('SignIn')
                      }, 3000)
                    }}
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
