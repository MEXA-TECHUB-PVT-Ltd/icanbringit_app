import {StyleSheet} from 'react-native'

import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen'

import COLORS from '../../themes/colors'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  txt1: {
    color: '#000',
    fontSize: heightPercentageToDP(3.2),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  txt: {
    color: '#5D5D5D',
    fontFamily: 'Montserrat-Medium',
    fontSize: heightPercentageToDP(1.9),
    marginHorizontal: '9%',
    textAlign: 'center',
    marginTop: '5%',
    lineHeight: 20,
  },
  map: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginTop: 100,
  },
  button: {
    // flexDirection: 'row',
    backgroundColor: '#1B146433',
    borderRadius: 10,
    width: 300,
    marginTop: '4%',
    marginBottom: '5%',
  },
  text: {
    color: '#1B1464',
    alignSelf: 'center',
    fontSize: widthPercentageToDP(4),
    fontFamily: 'Montserrat-Medium',
  },
})

export default STYLES
