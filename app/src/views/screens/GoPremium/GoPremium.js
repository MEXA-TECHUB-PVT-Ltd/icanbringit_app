import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SettingHeader from '../../../components/SettingHeader/SettingHeader';
import COLORS from '../../../consts/colors';
import Images from '../../../consts/Images';
import CustomText from '../../../components/Text';

const GoPremium = () => {
  return (
    <SafeAreaView
      style={{flexGrow: 1, paddingTop: 25, backgroundColor: COLORS.white}}>
      <ScrollView>
        <SettingHeader title={'Go Premium'} />
        <View style={{alignItems:'center', marginTop:20}}>
          <Image
            source={Images.Logo1}
            style={{height: 80, width: 160}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container2}>
        <TouchableOpacity
            style={[styles.button1, { backgroundColor: button1Color }]}
            onPress={handleButton1Click}>
            <Text style={styles.buttonText2}>Upcoming Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button1, { backgroundColor: button2Color }]}
            onPress={handleButton2Click}>
            <Text style={[styles.buttonText2, { color: button2TextColor }]}>
              Assigned Tasks
            </Text>
          </TouchableOpacity>
        </View>
        {showEvents ? (
          <View >
         <CustomText text={'1'}/>
          </View>
        ) : (
         <View>
            <CustomText text={'2'}/>
         </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GoPremium;

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        backgroundColor: '#D1D0E0',
        borderRadius: 30,
        height: 45,
      },
      button1: {
        padding: 5,
        borderRadius: 18,
        height: 30,
        width: '40%',
        alignSelf: 'center',
      },
      buttonText2: {
        // fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
      },
});
