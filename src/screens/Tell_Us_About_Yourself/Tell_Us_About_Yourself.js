import React, {useState} from 'react'
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native'

import {Dropdown} from 'react-native-element-dropdown'
import CustomButton from '../../components/button/Custom_Button'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import {Input} from '../../components/button/TextInput'
import styles from './styles'

const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Other', value: '3'},
]
function SignIn({navigation}) {
  const [value, setValue] = useState(null)

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <View style={styles.mainView}>
          <Signin_signup_header title="Tell Us About Yourself" />
          <View style={{marginHorizontal: '7%', marginTop: '0%'}}>
            <Input title={'Full name'} />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Gender"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => setValue(item.value)}
            />
            <Input title={'Age'} type={'numeric'} />
            <Input title={'City'} />
            <Input title={'Country'} />
          </View>

          <View style={{alignSelf: 'center', marginTop: '33%', marginBottom: '5%'}}>
            <CustomButton
              title="Continue"
              load={false}
              // checkdisable={inn == '' && cm == '' ? true : false}
              customClick={() => navigation.navigate('Add_Profile_photo')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
