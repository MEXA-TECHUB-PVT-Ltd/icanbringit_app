import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, StatusBar, Image, View, TouchableOpacity} from 'react-native'

import {Formik} from 'formik'
import {Text, Divider} from 'react-native-paper'
import DeviceInfo from 'react-native-device-info'
import {showMessage} from 'react-native-flash-message'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import CustomButton from '../../components/button/Custom_Button'
import InputField from '../../components/InputFiled'
import CustomText from '../../components/Text'
import CustomLoader from '../../components/common/CustomLoader'

import {logInValidationSchema} from '../../utils/Validations'
import images from '../../constants/images'
import {isIos} from '../../utils/helpers/Dimensions'

import {globalStyles as gs} from '../../styles'
import {colors} from '../../themes'
import styles from './styles'

import {useDispatch, useSelector} from 'react-redux'
import {signinUser} from '../../redux/slices/auth/signinSlice'
import StorageService from '../../utils/helpers/StorageHelper'

const SignIn = ({navigation}) => {
  const dispatch = useDispatch()
  const {loading, data, error} = useSelector(state => state.signin)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    signin_type: 'email',
    device_id: '',
  })

  const onLogin = async values => {
    values.device_id = values.device_id || userData.device_id
    dispatch(signinUser(values))
  }

  const fetchDeviceId = async () => {
    const deviceId = await DeviceInfo.getUniqueId()
    setUserData(prevData => ({...prevData, device_id: deviceId}))
  }

  useEffect(() => {
    fetchDeviceId()
  }, [])

  useEffect(() => {
    if (data?.status) {
      StorageService.saveItem('token', data.token)
      navigation.navigate('MyTabs', {screen: 'Home'})
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

  const onForgetPass = () => navigation.navigate('Forget_Password')

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={colors.white}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
        <View style={styles.mainView}>
          <Formik
            initialValues={userData}
            validateOnMount={true}
            onSubmit={values => onLogin(values)}
            validationSchema={logInValidationSchema}>
            {({handleSubmit, handleChange, handleBlur, values, touched, errors}) => (
              <View style={styles.mainView}>
                <Signin_signup_header title="I Can Bring It!" title1="Sign In" />
                <View style={styles.emailInputContainer}>
                  <InputField
                    placeholder={'Email Address'}
                    value={values.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    secureText={false}
                    Lefticon={true}
                    name="email-outline"
                    type={'material-community'}
                    color={colors.quartz}
                    size={18}
                  />
                  {errors.email && touched.email && (
                    <CustomText text={errors.email} style={styles.errors} />
                  )}
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
                    color={colors.old_silver_o2}
                    size={18}
                  />
                  {errors.password && touched.password && (
                    <CustomText text={errors.password} style={styles.errors} />
                  )}
                </View>
                <View style={styles.mh23}>
                  <TouchableOpacity onPress={onForgetPass}>
                    <Text style={styles.txt}>Forget Password?</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.submitBtnContainer}>
                  <CustomButton
                    title="Continue"
                    load={false}
                    customClick={() => handleSubmit(values)}
                  />
                </View>
                <View style={styles.bigview}>
                  <Divider style={styles.divider} />
                  <Text style={styles.txt1}> or continue with </Text>
                  <Divider style={styles.divider} />
                </View>

                <View style={styles.v2}>
                  <Image source={images.facebook} style={styles.img} />
                  <Image source={images.google} style={styles.img} />
                  {isIos && <Image source={images.apple} style={styles.img} />}
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('SignUp')}
                  style={styles.smtext}>
                  <Text style={styles.txt2}>
                    Already have an account?
                    <Text style={styles.txt3}> Sign Up</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
        {loading && <CustomLoader />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
