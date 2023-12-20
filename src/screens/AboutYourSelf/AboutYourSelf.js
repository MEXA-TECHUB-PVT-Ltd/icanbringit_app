import React, {useState} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'

import Signin_signup_header from '../../components/button/Signin_signup_header'
import InputField from '../../components/InputFiled'
import Custom_Button from '../../components/button/Custom_Button'
import {Picker} from '@react-native-picker/picker'
import {colors} from '../../themes'
import {globalPaddingStyles as gps, globalStyles as gs} from '../../styles'

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
    <View style={gs.fill}>
      <Signin_signup_header title="Tell Us About Yourself" />
      <ScrollView>
        <View style={gps.ph20}>
          <InputField placeholder={'Full name'} />
          <View style={styles.pickerContainer}>
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
          <View style={styles.btnContainer}>
            <Custom_Button
              title="Continue"
              load={false}
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
  pickerContainer: {
    borderWidth: 0.5,
    borderColor: colors.black,
    marginTop: 10,
    borderRadius: 10,
  },
  picker: {
    borderColor: colors.black,
    borderWidth: 1,
  },
  btnContainer: {marginTop: '40%'},
})
