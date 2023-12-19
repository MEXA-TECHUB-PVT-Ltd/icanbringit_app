import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native'

import {Formik} from 'formik'
import {Text, Divider} from 'react-native-paper'

import COLORS from '../../themes/colors'
import appImages from './../../constants/Images'
import CustomButton from '../../components/button/Custom_Button'
import Signin_signup_header from '../../components/button/Signin_signup_header'
import styles from './styles'
import {logInValidationSchema} from '../../utils/Validations'
import InputField from '../../components/InputFiled'
import CustomText from '../../components/Text'

const SignIn = ({navigation}) => {
  const LogInUser = async (values, {setSubmitting, setValues}) => {
    navigation.navigate('MyTabs', {screen: 'Home'})
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          {/* <Signin_signup_header title="I Can Bring It!" title1="Sign In" /> */}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validateOnMount={true}
            onSubmit={(values, {setSubmitting, setValues}) =>
              LogInUser(values, {setSubmitting, setValues})
            }
            validationSchema={logInValidationSchema}>
            {({handleSubmit, handleChange, handleBlur, values, touched, errors, isValid}) => (
              <View style={styles.mainView}>
                <Signin_signup_header title="I Can Bring It!" title1="Sign In" />
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
                    color={COLORS.grey}
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
                    color={COLORS.greylight}
                    size={18}
                  />
                  {errors.password && touched.password && (
                    <CustomText text={errors.password} style={styles.errors} />
                  )}
                </View>
                <View style={{marginHorizontal: 23}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Forget_Password')
                    }}>
                    <Text style={styles.txt}>Forget Password?</Text>
                  </TouchableOpacity>
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
                    customClick={() => handleSubmit(values)}
                  />
                </View>
                <View style={styles.bigview}>
                  <Divider style={styles.divider} />
                  <Text style={styles.txt1}> or continue with </Text>
                  <Divider style={styles.divider} />
                </View>

                <View style={[styles.v2, {width: Platform.OS === 'ios' ? '60%' : '40%'}]}>
                  <Image source={appImages.f} style={styles.img} />
                  <Image source={appImages.g} style={styles.img} />
                  {Platform.OS === 'ios' && <Image source={appImages.a} style={styles.img} />}
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate('SignUp')
                  }}
                  style={{
                    alignSelf: 'center',
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}>
                  <Text style={styles.txt2}>
                    Already have an account?
                    <Text style={styles.txt3}> Sign Up</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
