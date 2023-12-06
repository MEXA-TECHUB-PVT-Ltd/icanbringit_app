import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import SettingHeader from '../../../components/SettingHeader/SettingHeader';
import {Formik} from 'formik';
import styles from './styles';
import Custom_Button from '../../../components/button/Custom_Button';
import InputField from '../../../components/InputFiled';
import COLORS from '../../../consts/colors';
import CustomText from '../../../components/Text';
import {resetPasswordValidationSchema} from '../../../Utills/Validations';
import CustomSnackbar from '../../../components/CustomSnackbar/CustomSnackbar';
const UpdatePassword = ({navigation}) => {
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const dismissSnackbar = () => {
       setSnackbarVisible(true);
     };
     
    const handleUpdatePassword = async () => {
   
       setSnackbarVisible(true);
       setTimeout(() => {
         setSnackbarVisible(false);
        navigation.navigate('Setting')

       }, 3000);
     };
     const resetPassword = ({values}) => {
        handleUpdatePassword()
      };
     
  return (
    <SafeAreaView
      style={{flexGrow: 1, paddingTop: 25, backgroundColor: COLORS.white}}>
      <SettingHeader title={'Change Password'} />
      <View style={styles.mainView}>
        {/* <Signin_signup_header title="I Can Bring It!" title1="Sign In" /> */}
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validateOnMount={true}
          onSubmit={(values, {setSubmitting, setValues}) =>
            resetPassword(values, {setSubmitting, setValues})
          }
          validationSchema={resetPasswordValidationSchema}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <View style={styles.mainView}>
              <View style={{marginHorizontal: '7%', marginTop: '8%'}}>
                <InputField
                  placeholder={'Old Password'}
                //   value={values.password}
                //   onBlur={handleBlur('password')}
                //   onChangeText={handleChange('password')}
                  secureText={true}
                  icon={true}
                  Lefticon={true}
                  name="lock"
                  type={'SimpleLineIcons'}
                  color={COLORS.greylight}
                  size={18}
                />
                {/* {errors.password && touched.password && (
                  <CustomText text={errors.password} style={styles.errors} />
                )} */}
                <InputField
                  placeholder={'New password'}
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
                <InputField
                  placeholder={'Confirm password'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  secureText={true}
                  icon={true}
                  Lefticon={true}
                  name="lock"
                  type={'SimpleLineIcons'}
                  color={COLORS.greylight}
                  size={18}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <CustomText text={errors.confirmPassword} style={styles.errors} />
                )}
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  marginTop: '60%',
                  marginBottom: '5%',
                }}>
                <Custom_Button
                  title="Continue"
                  load={false}
                  // checkdisable={inn == '' && cm == '' ? true : false}
                  customClick={() => {
                    handleSubmit(values);
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <CustomSnackbar
      message={'Success'}
      messageDescription={'Password changed successfully'}
      onDismiss={dismissSnackbar} 
      visible={snackbarVisible}
    />
    </SafeAreaView>
  );
};

export default UpdatePassword;
