import React from 'react'
import {View, TouchableOpacity} from 'react-native'

import {useNavigation} from '@react-navigation/native'

const Add = () => {
  const navigation = useNavigation()

  const handleButtonClick = () => navigation.replace('AnotherScreen')

  return (
    <View>
      <TouchableOpacity onPress={handleButtonClick}></TouchableOpacity>
    </View>
  )
}

export default Add
