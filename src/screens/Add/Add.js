import React from 'react'
import {TouchableOpacity} from 'react-native'

import {useNavigation} from '@react-navigation/native'

const Add = () => {
  const navigation = useNavigation()

  const handleButtonClick = () => navigation.replace('AnotherScreen')

  return <TouchableOpacity onPress={handleButtonClick}></TouchableOpacity>
}

export default Add
