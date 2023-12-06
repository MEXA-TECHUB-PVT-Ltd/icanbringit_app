import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';


export default function Custom_Button(props,style) {
    return (

        <Button
            disabled={props.checkdisable}
            mode="contained"
            onPress={props.customClick}
            style={[styles.button,style]}
            contentStyle={{
                padding: '1%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            loading={props.load}
            labelStyle={{
                fontSize: widthPercentageToDP(4),
                // paddingTop: '1%',
                fontFamily: 'Montserrat-Medium',
                color: '#FFFFFF',
                alignSelf: 'center'
            }}
        >
            {props.title}
        </Button>
    );
}
const styles = StyleSheet.create({
    button: {
        // flexDirection: 'row',
        backgroundColor: '#1B1464',
        borderRadius: 10,
        width: 300,
        marginBottom: '3%',
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: widthPercentageToDP(4),
        fontFamily: 'Montserrat-Medium',
    },
});