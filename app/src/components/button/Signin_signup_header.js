import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Back from './../../assets/svg/back.svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function Custom_Button(props) {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        // style={{backgroundColor:'pink'}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Back
          width={35}
          height={35}
          style={{marginTop: '14%', marginBottom: '7%', marginHorizontal: '5%'}}
        />
      </TouchableOpacity>

      <Text style={styles.txt}>{props.title}</Text>

      <Text style={styles.txt1}>{props.title1}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontSize: heightPercentageToDP(3.2),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  txt1: {
    color: 'black',
    fontSize: heightPercentageToDP(2.8),
    fontFamily: 'Montserrat-Bold',
    marginLeft: '8%',
    marginTop: '10%',
  },
});
