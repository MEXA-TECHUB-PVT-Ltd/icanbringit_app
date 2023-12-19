import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false}></StatusBar>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
