import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, View, LogBox, StatusBar} from 'react-native'

import {Formik} from 'formik'

import CustomButton from '../../components/button/Custom_Button'
import CustomLoader from '../../components/common/CustomLoader'
import FVR_headers from '../../components/button/FVR_headers'
import InputField from '../../components/InputFiled'
import CustomText from '../../components/Text'

import {forgetPasswordValidationSchema} from '../../utils/Validations'
import {globalStyles as gs} from '../../styles'
import styles from './styles'
import {colors} from '../../themes'
import {showMessage} from 'react-native-flash-message'
import {useDispatch, useSelector} from 'react-redux'
import {forgotPass} from '../../redux/slices/auth/forgotPassSlice'

LogBox.ignoreAllLogs()

const Forget_Password = ({navigation}) => {
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const state = useSelector(state => state.forgotPass)

  const onVerification = async values => {
    setEmail(values.email)
    dispatch(forgotPass({email: values.email}))
  }

  useEffect(() => {
    if (state?.data?.status) {
      showMessage({
        message: 'Success',
        description: state.data.message,
        type: 'success',
      })
      navigation.navigate('Verification', {email: email})
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
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <FVR_headers
            title="Forget Password"
            title1="Enter your email below for a 4-digit verification code."
          />
          <View style={styles.formContainer}>
            <Formik
              initialValues={{email: email}}
              validateOnMount={true}
              onSubmit={values => onVerification(values)}
              validationSchema={forgetPasswordValidationSchema}>
              {({handleSubmit, handleChange, handleBlur, values, touched, errors}) => (
                <View style={styles.mainView}>
                  <View style={styles.emailContainer}>
                    <InputField
                      placeholder={'Email Address'}
                      value={values.email}
                      onBlur={handleBlur('email')}
                      onChangeText={handleChange('email')}
                      secureText={false}
                      Lefticon={true}
                      name="email-outline"
                      type={'material-community'}
                      color={colors.spanish_grey}
                      size={18}
                      style={styles.input}
                    />
                    {errors.email && touched.email && (
                      <CustomText text={errors.email} style={styles.errors} />
                    )}
                  </View>
                  <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                      <CustomButton
                        title="Send Code"
                        load={false}
                        customClick={() => handleSubmit(values)}
                      />
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
        {state?.loading && <CustomLoader />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Forget_Password
