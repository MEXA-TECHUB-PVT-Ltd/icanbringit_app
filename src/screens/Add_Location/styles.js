import {StyleSheet} from 'react-native'

import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen'

import Colors from '../../themes/colors'
import {colors, fonts} from '../../themes'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  icon: {
    marginTop: '14%',
    marginBottom: '7%',
    marginHorizontal: '5%',
  },
  dividerCont: {marginHorizontal: '7%', marginTop: '0%'},
  divider: {
    alignSelf: 'center',
    marginTop: '33%',
    marginBottom: '5%',
  },
  txt1: {
    color: colors.black,
    fontSize: heightPercentageToDP(3.2),
    fontFamily: fonts.montserrat.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  txt: {
    color: colors.davy_grey,
    fontFamily: fonts.montserrat.medium,
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
    backgroundColor: colors.primary_light,
    borderRadius: 10,
    width: 300,
    marginTop: '4%',
    marginBottom: '5%',
  },
  text: {
    color: colors.primary,
    alignSelf: 'center',
    fontSize: widthPercentageToDP(4),
    fontFamily: fonts.montserrat.medium,
  },
})

export default STYLES
