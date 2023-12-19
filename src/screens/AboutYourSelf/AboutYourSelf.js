import React, {useState} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import InputField from '../../components/InputFiled'
import Custom_Button from '../../components/button/Custom_Button'
import {Picker} from '@react-native-picker/picker'

const AboutYourSelf = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('Select Gender')
  const genderOptions = [
    {label: 'Select Gender', value: 'Select Gender'},
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Non-Binary', value: 'non-binary'},
    {label: 'Other', value: 'other'},
  ]

  return (
    <View style={{flex: 1}}>
      {/* <StatusBar translucent={false} /> */}
      <Signin_signup_header title="Tell Us About Yourself" />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <InputField placeholder={'Full name'} />
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'black',
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Picker
              selectedValue={selectedGender}
              onValueChange={itemValue => setSelectedGender(itemValue)}
              style={styles.picker}>
              {genderOptions.map((gender, index) => (
                <Picker.Item key={index} label={gender.label} value={gender.value} />
              ))}
            </Picker>
          </View>
          <InputField placeholder={'Select Gender'} />
          <InputField placeholder={'Age'} />
          <InputField placeholder={'Country'} />
          <View style={{marginTop: '40%'}}>
            <Custom_Button
              title="Continue"
              load={false}
              // checkdisable={inn == '' && cm == '' ? true : false}
              customClick={() => navigation.navigate('ProfilePic')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default AboutYourSelf

const styles = StyleSheet.create({
  picker: {
    borderColor: '#000',
    borderWidth: 1,
  },
})
