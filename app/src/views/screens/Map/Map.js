
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Back from './../../../assets/svg/back.svg';
import Pin from './../../../assets/svg/pin.svg';
import styles from './styles';
import Custom_Button from '../../../components/button/Custom_Button';
const CustomMarker = () => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Pin width={41} height={41} />
    </View>
);

const Onclick_getlatlong = ({ navigation }) => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [check, setCheck] = useState(true);

    useEffect(() => {
        const getCurrentLocation = async () => {
            try {
                const location = await new Promise((resolve, reject) => {
                    Geolocation.getCurrentPosition(
                        (position) => resolve(position),
                        (error) => reject(error),
                    );
                });

                setLat(location.coords.latitude);
                setLong(location.coords.longitude);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch location');
                console.error('Error fetching location:', error);
            }
        };

        getCurrentLocation();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={styles.body}
                region={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.0005,
                }}
                showsUserLocation={false}
            >
                <Marker
                    coordinate={{ latitude: lat, longitude: long }}
                    title="San Francisco"
                    description="Test"
                    pinColor="gold"
                    draggable={true}
                    onDragEnd={(e) => {
                        setLat(e.nativeEvent.coordinate.latitude);
                        setLong(e.nativeEvent.coordinate.longitude);
                    }}
                >
                    <CustomMarker />
                </Marker>
            </MapView>

            {check ? (
                <Back
                    width={20}
                    height={20}
                    style={{
                        position: 'absolute',
                        marginLeft: '5%',
                        marginTop: '5%',
                    }}
                    onPress={() => navigation.goBack()}
                />
            ) : (
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        marginLeft: '5%',
                        marginTop: '5%',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={() => setCheck(true)}
                >
                    <Back width={37} height={37} />
                    <View
                        style={{
                            height: 46,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <TextInput
                            style={{
                                backgroundColor: '#FFFFFF',
                                width: '85%',
                                borderRadius: 20,
                                paddingLeft: '15%',
                                marginLeft: '5%',
                                color: 'black',
                            }}
                            placeholder="Search here"
                        />
                        <Back width={20} height={20} style={{ position: 'absolute', width: 10, height: 13, marginLeft: 29 }} />
                    </View>
                </TouchableOpacity>
            )}

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    marginLeft: '80%',
                    marginTop: '5%',
                }}
                onPress={() => setCheck(false)}
            >
                <Back width={37} height={37} />
            </TouchableOpacity>

            <View style={styles.v}>
                <View style={{
                    borderColor: '#E4DFDF',
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingHorizontal: '4%',
                    marginTop: '10%',
                    marginBottom: '5%',
                    alignSelf:'center',
                    backgroundColor: '#FFFFFF',
                    width:'82%'
                }}>
                    <TextInput 
                        // keyboardType={props.type}
                        placeholder={'Enter Location'} />
                </View>


                <View style={{ alignSelf: 'center', marginTop: '1%', marginBottom: '5%' }}>

                    <Custom_Button
                        title="Add Location"
                        load={false}
                        // checkdisable={inn == '' && cm == '' ? true : false}
                        customClick={() => {
                            navigation.navigate('Select_preferences')
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Onclick_getlatlong;
