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
import {useNavigation} from '@react-navigation/native';
import Back from './../../assets/svg/back.svg';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const SettingHeader = ({title, txtStyle}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: '8%',
        justifyContent: 'space-around',
        marginHorizontal: 20,
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.goBack();
        }}>
        <Back width={35} height={35} style={{}} />
      </TouchableOpacity>
      <View style={{ width:'99%'}}>
        <Text style={[styles.txt, txtStyle]}>{title}</Text>
      </View>
    </View>
  );
};

export default SettingHeader;

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontSize: heightPercentageToDP(3),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
