import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, Image, View, TouchableOpacity, Alert} from 'react-native'

import DeviceInfo from 'react-native-device-info'
import {Text, Divider} from 'react-native-paper'
import {Formik} from 'formik'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import CustomLoader from '../../components/common/CustomLoader'
import CustomButton from '../../components/button/Custom_Button'
import InputField from '../../components/InputFiled'
import CustomText from '../../components/Text'

import {SignUpValidationSchema} from '../../utils/Validations'
import {isIos} from '../../utils/helpers/Dimensions'
import images from '../../constants/images'
import Colors from '../../themes/colors'

import styles from './styles'
import {globalStyles as gs} from '../../styles'

import {useDispatch, useSelector} from 'react-redux'
import {signupUser} from '../../redux/slices/auth/signupSlice'

const SignUp = ({navigation}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    signup_type: 'email',
    device_id: '',
  })

  const dispatch = useDispatch()
  const signupState = useSelector(state => state.signup)

  const RegisterUser = values => {
    const {confirmPassword, ...data} = values
    data.device_id = data.device_id || userData.device_id
    dispatch(signupUser(data))
  }

  const fetchDeviceId = async () => {
    const deviceId = await DeviceInfo.getUniqueId()
    setUserData(prevData => ({...prevData, device_id: deviceId}))
  }

  useEffect(() => {
    fetchDeviceId()
  }, [])

  useEffect(() => {
    if (signupState?.data) {
      navigation.navigate('Email_Verification', {
        email: signupState.data?.result?.result.email,
        id: signupState.data?.result?.result.id,
      })
    }
  }, [signupState?.data])

  useEffect(() => {
    if (signupState?.error) {
      Alert.alert('error: ', signupState.error)
    }
  }, [signupState?.error])

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={{backgroundColor: Colors.white}}>
        <Formik
          initialValues={userData}
          validateOnMount={true}
          onSubmit={values => RegisterUser(values)}
          validationSchema={SignUpValidationSchema}>
          {({handleSubmit, handleChange, handleBlur, values, touched, errors}) => (
            <View style={gs.whiteContainer}>
              <Signin_signup_header title="I Can Bring It!" title1="Create Account" />
              <View style={{marginHorizontal: '7%', marginTop: '8%'}}>
                <InputField
                  placeholder={'Email Address'}
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  secureText={false}
                  Lefticon={true}
                  name="email-outline"
                  type={'material-community'}
                  color={Colors.quartz}
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
                  color={Colors.old_silver_o2}
                  size={18}
                />
                {errors.password && touched.password && (
                  <CustomText text={errors.password} style={styles.errors} />
                )}

                <InputField
                  placeholder={'Re-type Password'}
                  value={values.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                  secureText={true}
                  icon={true}
                  Lefticon={true}
                  name="lock"
                  type={'SimpleLineIcons'}
                  color={Colors.old_silver_o2}
                  size={18}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <CustomText text={errors.confirmPassword} style={styles.errors} />
                )}
              </View>

              <View style={styles.signupBtn}>
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

              <View style={[styles.v2, {width: isIos ? '60%' : '40%'}]}>
                <Image source={images.facebook} style={styles.img} />
                <Image source={images.google} style={styles.img} />
                {isIos && <Image source={images.a} style={styles.img} />}
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('SignIn')}
                style={styles.loginBtn}>
                <Text style={styles.txt2}>
                  Already have an account?
                  <Text style={styles.txt3}> Sign In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        {signupState?.loading && <CustomLoader />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
