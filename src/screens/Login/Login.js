import React, {useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {Text, Button, Snackbar, Headline} from 'react-native-paper'

import LoginHeader from '../../components/logins_comp/LoginHeader'
import STYLES from '../../components/button/styles'
import base_url from '../../constants/base_url'
import styles from './styles'
import {isIos} from '../../utils/helpers/Dimensions'
import {globalStyles as gs, globalMarginStyles as gms} from '../../styles'
import {colors} from '../../themes'

const height = Dimensions.get('window').height

function Login({navigation}) {
  const [visible, setVisible] = useState(false)
  const [snackDetails, setSnackDetails] = useState({
    text: '',
    backgroundColor: '',
  })

  const onToggleSnackBar = () => setVisible(!visible)
  const onDismissSnackBar = () => setVisible(false)

  const [loading, setloading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const callLogin = async () => {
    setloading(true)
    if (password.length == 0 || email.length == 0) {
      setloading(false)
      setSnackDetails({
        text: 'Please fill all the fields',
        backgroundColor: colors.red,
      })
      onToggleSnackBar()
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setloading(false)

      setSnackDetails({
        text: 'Please enter a valid email address',
        backgroundColor: colors.red,
      })
      onToggleSnackBar()
    } else {
      var InsertAPIURL = base_url + '/user/login.php'
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }

      await fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(response => {
          setloading(false)

          if (response[0].error == true) {
            setSnackDetails({
              text: response[0].message,
              backgroundColor: colors.red,
            })
            onToggleSnackBar()
          } else {
            setSnackDetails({
              text: response[0].message,
              backgroundColor: colors.primary,
            })
            onToggleSnackBar()
            storeData(response[0])
            navigation.replace('MyDrawer')
          }
        })
        .catch(error => {
          setloading(false)
          alert('this is error' + error)
        })
    }
  }

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('userDetail', jsonValue)
    } catch (e) {
      alert('Error : ' + e)
    }
  }


  return (
    <SafeAreaView style={gs.whiteContainer}>
      <Snackbar
        visible={visible}
        style={{
          zIndex: 999,
          backgroundColor: snackDetails.backgroundColor,
          position: 'absolute',
          top: -height + 70,
          width: '95%',
          alignSelf: 'center',
        }}
        duration={1000}
        onDismiss={onDismissSnackBar}>
        {snackDetails.text}
      </Snackbar>
      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : 'height'}
        style={[gs.whiteContainer, {zIndex: -9}]}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          style={{
            paddingHorizontal: '5%',
            zIndex: -9,
          }}>
          <View style={styles.mainView}>
            <LoginHeader navigation={navigation} />

            <View
              style={{
                alignItems: 'center',
                marginBottom: '15%',
              }}>
              <Headline>Sign In</Headline>
              <Text
                style={{
                  marginTop: '5%',
                  color: Colors.old_silver_o2,
                }}>
                Sign In to get started with BeforeVault
              </Text>
            </View>

            <View style={styles.txtInptView}>
              <TextInput
                style={styles.txtInpt}
                color={colors.dark}
                placeholder="Email"
                placeholderTextColor={colors.dark}
                keyboardType="email-address"
                autoCapitalize="none"
                underlineColor={colors.dark}
                activeUnderlineColor={colors.primary}
                autoCorrect={false}
                mode="flat"
                onChangeText={text => setEmail(text)}
                left={<TextInput.Icon icon="email" iconColor={colors.light} />}
              />
              <TextInput
                style={[styles.txtInpt, gms.mt20]}
                color={colors.dark}
                placeholder="Password"
                placeholderTextColor={colors.dark}
                autoCapitalize="none"
                underlineColor={colors.dark}
                activeUnderlineColor={colors.primary}
                autoCorrect={false}
                mode="flat"
                secureTextEntry={secureTextEntry}
                onChangeText={text => setPassword(text)}
                left={<TextInput.Icon icon="lock" iconColor={colors.light} />}
                right={
                  <TextInput.Icon
                    icon={secureTextEntry ? 'eye' : 'eye-off'}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                    iconColor={colors.light}
                  />
                }
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 20,
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
                  <Text style={styles.frgtpss}>Forget Password?</Text>
                </TouchableOpacity>
              </View>

              <View style={{zIndex: -9}}>
                <Button
                  mode="contained"
                  style={STYLES.btn}
                  contentStyle={STYLES.btnContent}
                  onPress={callLogin}
                  loading={loading}
                  disabled={loading}>
                  <Text style={STYLES.btnText}>Sign in</Text>
                </Button>
                <View
                  style={[
                    styles.SgnOrIntxt,
                    {
                      paddingVertical: '5%',
                      backgroundColor: Colors.white,
                    },
                  ]}>
                  <Text style={{color: colors.dark}}>Don`t have account? </Text>
                  <TouchableOpacity
                    style={{left: '5%'}}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{color: colors.secondary}}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login
