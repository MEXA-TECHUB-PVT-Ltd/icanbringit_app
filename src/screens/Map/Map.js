import React, {useEffect, useState} from 'react'
import {View, TouchableOpacity, TextInput, Alert} from 'react-native'

import MapView, {Marker} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

import Custom_Button from '../../components/button/Custom_Button'
import Back from '../../assets/svgs/back.svg'
import Pin from '../../assets/svgs/pin.svg'

import styles from './styles'
import {globalStyles as gs} from '../../styles'
import {colors} from '../../themes'
import {googleMapApiKey, googleMapsApiURL} from '../../api/endpoints'

const CustomMarker = () => (
  <View style={styles.center}>
    <Pin width={41} height={41} />
  </View>
)

const Map = ({navigation}) => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.0005,
  })

  const [region, setRegion] = useState(initialRegion)
  const [markerPosition, setMarkerPosition] = useState({latitude: 0, longitude: 0})
  const [locationName, setLocationName] = useState('')

  const onMarkerDragEnd = async e => {
    const {latitude, longitude} = e.nativeEvent.coordinate
    setMarkerPosition({latitude, longitude})

    try {
      const response = await fetch(
        `${googleMapsApiURL}json?latlng=${latitude},${longitude}&key=${googleMapApiKey}`,
      )
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        const address = data.results[0].formatted_address
        setLocationName(address)
      }
    } catch (error) {
      console.error('Error fetching location name:', error)
    }
  }

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const location = await new Promise((resolve, reject) => {
          Geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error),
          )
        })
        const currentRegion = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }
        setInitialRegion(currentRegion)
        setRegion(currentRegion)
        setMarkerPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })

        const response = await fetch(
          `${googleMapsApiURL}json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
        )
        const data = await response.json()
        if (data.results && data.results.length > 0) {
          const address = data.results[0].formatted_address
          setLocationName(address)
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch location')
        console.error('Error fetching location:', error)
      }
    }

    getCurrentLocation()
  }, [])

  const onAddLocation = () => navigation.navigate('Select_preferences')

  return (
    <View style={gs.fill}>
      <MapView
        style={styles.body}
        region={region}
        showsUserLocation={true}
        onPress={onMarkerDragEnd}>
        <Marker
          coordinate={markerPosition}
          title="Current Location"
          description="Your current location"
          pinColor="gold"
          draggable={true}
          onDragEnd={onMarkerDragEnd}>
          <CustomMarker />
        </Marker>
      </MapView>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Back width={37} height={37} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            placeholderTextColor={colors.spanish_grey}
            placeholder={'Enter Location'}
            style={{color: colors.spanish_grey}}
            value={locationName}
            onChangeText={text => setLocationName(text)}
          />
        </View>
        <View style={styles.primarybtnContainer}>
          <Custom_Button title="Add Location" load={false} customClick={onAddLocation} />
        </View>
      </View>
    </View>
  )
}

export default Map
