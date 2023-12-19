import {StyleSheet} from 'react-native'

import {heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen'

const STYLES = StyleSheet.create({
  bg: {
    flex: 1,
  },
  mainv: {
    flex: 1,
    backgroundColor: 'white',
  },

  txt: {
    color: '#191919',
    fontFamily: 'Montserrat-Bold',
    fontSize: heightPercentageToDP(3),
    marginTop: '25%',
    textAlign: 'center',
    marginHorizontal: '8%',
  },
  txt1: {
    color: '#282828',
    fontSize: wp(10),
    fontFamily: 'Laila-Bold',
    alignSelf: 'center',
  },
  txt2: {
    marginLeft: '3%',
    textDecorationLine: 'line-through',
    color: '#A8A8A8',
    fontSize: wp(4),
    fontFamily: 'Laila-Medium',
  },

  v1: {marginHorizontal: '7%', marginTop: '5%', alignSelf: 'center', marginBottom: '20%'},
  txt3: {
    color: '#191919',
    fontFamily: 'Montserrat-Bold',
    fontSize: heightPercentageToDP(2.4),
  },
})

export default STYLES
