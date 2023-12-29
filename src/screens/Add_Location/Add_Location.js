import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'

import Custom_Button from '../../components/button/Custom_Button'
import Back from '../../assets/svgs/back.svg'
import {images} from '../../constants'
import {colors} from '../../themes'

import {globalStyles as gs} from '../../styles'
import styles from './styles'

function Add_Location({navigation, route}) {
  const userInfo = route?.params

  const onAddLocation = () => navigation.navigate('PreferredLocation', {userInfo})
  const onCurrentLocation = () => navigation.navigate('Map', {userInfo})
  const onBackPress = () => navigation.goBack()

  return (
    <SafeAreaView style={gs.fill}>
      <ScrollView style={{backgroundColor: colors.white}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={colors.transparent}
          translucent={true}
        />
        <View style={gs.whiteContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBackPress}>
            <Back width={35} height={35} style={styles.icon} />
          </TouchableOpacity>

          <Text style={styles.txt1}>Add Location</Text>
          <Text style={styles.txt}>
            To provide you with the best experience, we need access to your device location.
          </Text>
          <Image source={images.pin_map} style={styles.img} />
          <View style={[gs.fill, styles.btnPrimary]}>
            <Custom_Button
              title="Use my Current Location"
              load={false}
              customClick={onCurrentLocation}
            />
          </View>
          <View style={[gs.fill, styles.btnSecondary]}>
            <Custom_Button
              style={{backgroundColor: colors.primary_light}}
              title="Add Location"
              type="secondary"
              load={false}
              customClick={onAddLocation}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Add_Location
