import React from 'react'
import {SafeAreaView, ScrollView, Image, View, TouchableOpacity} from 'react-native'

import {Text, Divider} from 'react-native-paper'
import {Formik} from 'formik'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import CustomButton from '../../components/button/Custom_Button'
import InputField from '../../components/InputFiled'
import CustomText from '../../components/Text'

import {SignUpValidationSchema} from '../../utils/Validations'
import {isIos} from '../../utils/helpers/Dimensions'
import images from '../../constants/images'
import Colors from '../../themes/colors'
import styles from './styles'

const SignUp = ({navigation}) => {
  const RegisterUser = () => navigation.navigate('AboutYourSelf')

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        {/* <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />{' '} */}
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
          validationSchema={SignUpValidationSchema}>
          {({handleSubmit, handleChange, handleBlur, values, touched, errors, isValid}) => (
            <View style={styles.mainView}>
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
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
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

              <View
                style={{
                  alignSelf: 'center',
                  marginTop: '20%',
                  marginBottom: '5%',
                }}>
                <CustomButton
                  title="Continue"
                  load={false}
                  // checkdisable={inn == '' && cm == '' ? true : false}
                  customClick={() => {
                    handleSubmit(values)
                    navigation.navigate('AboutYourSelf')
                  }}
                />
              </View>
              <View style={styles.bigview}>
                <Divider style={styles.divider} />
                <Text style={styles.txt1}> or continue with </Text>
                <Divider style={styles.divider} />
              </View>

              <View style={[styles.v2, {width: isIos ? '60%' : '40%'}]}>
                <Image source={images.f} style={styles.img} />
                <Image source={images.g} style={styles.img} />
                {isIos && <Image source={images.a} style={styles.img} />}
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('SignIn')
                }}
                style={{
                  alignSelf: 'center',
                  marginTop: '5%',
                  marginBottom: '5%',
                }}>
                <Text style={styles.txt2}>
                  Already have an account?
                  <Text style={styles.txt3}> Sign In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
