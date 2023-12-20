import React, {useState} from 'react'
import {SafeAreaView, ScrollView, View, LogBox, StatusBar} from 'react-native'

import CustomButton from '../../components/button/Custom_Button'
import styles from './styles'
import {Formik} from 'formik'
import FVR_headers from '../../components/button/FVR_headers'
import {forgetPasswordValidationSchema} from '../../utils/Validations'
import InputField from '../../components/InputFiled'
import Colors from '../../themes/colors'
import CustomText from '../../components/Text'
import {colors} from '../../themes'
import {globalStyles as gs} from '../../styles'

LogBox.ignoreAllLogs()

const App = ({navigation}) => {
  const forgetUserPassword = () => navigation.navigate('Verification')

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={{backgroundColor: colors.fresh_air}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <FVR_headers
            title="Forget Password"
            title1="Enter your email below for a 4-digit verification code."
          />
          <View style={{marginHorizontal: '7%', marginTop: '25%'}}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validateOnMount={true}
              onSubmit={(values, {setSubmitting, setValues}) =>
                forgetUserPassword(values, {setSubmitting, setValues})
              }
              validationSchema={forgetPasswordValidationSchema}>
              {({handleSubmit, handleChange, handleBlur, values, touched, errors, isValid}) => (
                <View style={styles.mainView}>
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
                      color={Colors.dark}
                      size={18}
                      style={styles.input}
                    />
                    {errors.email && touched.email && (
                      <CustomText text={errors.email} style={styles.errors} />
                    )}
                  </View>

                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: '20%',
                      marginBottom: '5%',
                    }}>
                    <View
                      style={{
                        alignSelf: 'center',
                        marginTop: '70%',
                        marginBottom: '5%',
                      }}>
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
