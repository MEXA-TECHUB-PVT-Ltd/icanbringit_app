import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import SettingHeader from '../../components/SettingHeader/SettingHeader'
import Colors from '../../themes/colors'
import images from '../../constants/images'
import {colors} from '../../themes'

const GoPremium = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SettingHeader title={'Go Premium'} />
        <View style={styles.imgContainer}>
          <Image source={images.logo} style={styles.img} resizeMode="contain" />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Text style={styles.buttonText2}>Upcoming Events</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Assigned Tasks</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GoPremium

const styles = StyleSheet.create({
  container: {flexGrow: 1, paddingTop: 25, backgroundColor: Colors.white},
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: colors.lavender,
    borderRadius: 30,
    height: 45,
  },
  buttonText2: {
    textAlign: 'center',
    fontSize: 12,
  },
  imgContainer: {alignItems: 'center', marginTop: 20},
  img: {height: 80, width: 160},
})
