import {StyleSheet} from 'react-native'

import {heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {colors, fonts} from '../../themes'

const STYLES = StyleSheet.create({
  full: {width: '100%', height: '100%'},
  progressBarContainer: {alignSelf: 'center', marginTop: '30%'},
  txt: {
    color: colors.eerie_black,
    fontFamily: fonts.montserrat.bold,
    fontSize: heightPercentageToDP(3),
    marginTop: '25%',
    textAlign: 'center',
    marginHorizontal: '8%',
  },
  txt1: {
    color: colors.dark_green,
    fontSize: wp(10),
    fontFamily: fonts.laila.bold,
    alignSelf: 'center',
  },
  txt2: {
    marginLeft: '3%',
    textDecorationLine: 'line-through',
    color: colors.dark_grey_o11,
    fontSize: wp(4),
    fontFamily: fonts.laila.medium,
  },

  v1: {marginHorizontal: '7%', marginTop: '5%', alignSelf: 'center', marginBottom: '20%'},
  txt3: {
    color: colors.eerie_black,
    fontFamily: fonts.montserrat.bold,
    fontSize: heightPercentageToDP(2.4),
  },
})

export default STYLES
