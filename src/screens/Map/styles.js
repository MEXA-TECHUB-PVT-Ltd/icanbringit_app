import {StyleSheet} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const STYLES = StyleSheet.create({
  BUTTONSTYLE: {
    alignItems: 'center',
    top: 20,
    marginTop: 60,
    marginBottom: 0,
    alignSelf: 'center',
    justifyContent: 'center', // for middle writting
    height: 40,
    width: 200,
    backgroundColor: '#B3446C',
  },
  body: {
    width: '100%',
    height: '89%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: '#FF5722',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 320,
    alignSelf: 'center',
    marginTop: '10%',
  },
  txt: {
    color: '#ffff',
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  txt1: {
    color: '#000000',
    fontSize: wp(4.5),
    fontFamily: 'PlusJakartaSans-Bold',
    marginHorizontal: '3%',
    marginTop: '5%',
  },
  txt2: {
    color: '#000000',
    fontSize: wp(3.2),
    marginTop: '2%',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginLeft: '3%',
    marginRight: '10%',
  },
  v: {
    height: 170,
    width: '100%',
    alignSelf: 'center',
    bottom: 0,
    // marginTop: '20%',
    position: 'absolute',
    backgroundColor: 'white',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
})

export default STYLES
