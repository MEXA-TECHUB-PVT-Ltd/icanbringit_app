import {StyleSheet} from 'react-native'

import {heightPercentageToDP} from 'react-native-responsive-screen'

import Colors from '../../themes/colors'
import { colors, fonts } from '../../themes'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bigview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  divider: {
    backgroundColor: colors.quartz,
    height: 1,
    width: '30%',
    alignSelf: 'center',
  },
  txt: {
    color: colors.pastel_blue,
    fontFamily: fonts.montserrat.semi_bold,
    fontSize: heightPercentageToDP(1.8),
    marginTop: '4%',
    alignSelf: 'flex-end',
  },
  txt1: {
    color: Colors.quartz,
    fontFamily: fonts.montserrat.semi_bold,
    fontSize: heightPercentageToDP(1.8),
  },
  v2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
    alignSelf: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
  txt2: {
    color: colors.granite_grey,
    fontFamily: fonts.montserrat.medium,
    fontSize: heightPercentageToDP(1.8),
  },
  txt3: {
    color: Colors.primary,
    fontFamily: fonts.montserrat.bold,
    fontSize: heightPercentageToDP(1.8),
  },

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++

  dropdown: {
    height: 50,
    borderColor: colors.gainsboro,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: '2%',
    marginBottom: '4%',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: colors.white,
    left: 22,
    color: colors.spanish_grey,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: heightPercentageToDP(2),
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.spanish_grey,
  },
  selectedTextStyle: {
    fontSize: heightPercentageToDP(2),
    marginLeft: '3%',
    color: colors.spanish_grey,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})

export default STYLES
