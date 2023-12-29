import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import {colors, fonts} from '../../themes'
import { hp } from '../../utils/helpers/Dimensions'

const STYLES = StyleSheet.create({
  bigview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
  },
  firstInputContainer: {
    marginHorizontal: '7%',
    marginTop: '0%',
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
    fontSize: hp(1.8),
    marginTop: '4%',
    alignSelf: 'flex-end',
  },
  txt1: {
    color: Colors.quartz,
    fontFamily: fonts.montserrat.semi_bold,
    fontSize: hp(1.8),
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
    fontSize: hp(1.8),
  },
  txt3: {
    color: Colors.primary,
    fontFamily: fonts.montserrat.bold,
    fontSize: hp(1.8),
  },
  submitBtnContainer: {
    alignSelf: 'center',
    marginTop: '33%',
    marginBottom: '5%',
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
    fontSize: hp(2),
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.spanish_grey,
  },
  selectedTextStyle: {
    fontSize: hp(2),
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
