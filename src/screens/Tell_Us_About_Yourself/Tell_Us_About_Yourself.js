import React, {useState} from 'react'
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native'
import {Dropdown} from 'react-native-element-dropdown'

import CustomButton from '../../components/button/Custom_Button'
import {Input} from '../../components/button/TextInput'
import Signin_signup_header from '../../components/button/Signin_signup_header'

import {colors} from '../../themes'
import {globalStyles as gs} from '../../styles'
import styles from './styles'

const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Other', value: '3'},
]
function SignIn({navigation}) {
  const [name, setName] = useState('')
  const [gender, setGender] = useState(null)
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const onNameChange = value => setName(value)
  const onAgeChange = value => setAge(value)
  const onCityChange = value => setCity(value)
  const onCountryChange = value => setCountry(value)

  const onSubmit = () =>
    navigation.navigate('Add_Profile_photo', {
      fullname: name,
      gender: gender.label,
      age,
      city,
      country,
    })

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={colors.white}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
        <View style={gs.whiteContainer}>
          <Signin_signup_header title="Tell Us About Yourself" />
          <View style={styles.firstInputContainer}>
            <Input title={'Full name'} value={name} onChangeText={onNameChange} />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              itemTextStyle={styles.placeholderStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Gender"
              searchPlaceholder="Search..."
              value={gender}
              onChange={item => setGender(item)}
            />
            <Input value={age} onChangeText={onAgeChange} title={'Age'} type={'numeric'} />
            <Input value={city} onChangeText={onCityChange} title={'City'} />
            <Input value={country} onChangeText={onCountryChange} title={'Country'} />
          </View>

          <View style={styles.submitBtnContainer}>
            <CustomButton title="Continue" load={false} customClick={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
