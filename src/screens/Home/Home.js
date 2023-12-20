import {SafeAreaView, StatusBar, Text} from 'react-native'
import React from 'react'
import { globalStyles as gs} from '../../styles'

const Home = () => {
  return (
    <SafeAreaView style={gs.fill}>
      <StatusBar translucent={false}></StatusBar>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home