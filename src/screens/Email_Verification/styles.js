import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import {colors, fonts} from '../../themes'
import { hp, wp } from '../../utils/helpers/Dimensions'

const STYLES = StyleSheet.create({
  primaryBtn: {
    alignSelf: 'center',
    marginTop: '70%',
    marginBottom: '3%',
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.fresh_air,
  },
  btn2: {
    width: '83%',
    borderColor: Colors.primary,
    borderWidth: 1.5,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: '5%',
    alignSelf: 'center',
  },
  txt1: {
    color: Colors.primary,
    fontSize: hp(1.8),
    textAlign: 'center',
    fontFamily: fonts.montserrat.semi_bold,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  txt3: {
    color: Colors.primary,
    fontSize: wp(4),
    textAlign: 'center',
    fontFamily: fonts.montserrat.semi_bold,
  },
  // ------------------------verification styling-------------------------------
  root: {flex: 1, padding: 0, marginBottom: '10%', marginRight: '8%', marginTop: '20%'},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 10, marginLeft: '10%'},
  cell: {
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 20,
    fontFamily: fonts.montserrat.medium,
    borderWidth: 1,
    borderColor: colors.gainsboro,
    backgroundColor: colors.white,
    color: colors.black,
    textAlign: 'center',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingTop: '1%',
  },
  focusCell: {
    borderColor: colors.as,
    backgroundColor: colors.white,
    fontFamily: fonts.laila.medium,
    paddingTop: '2%',
  },
  textWS: {
    color: Colors.grey,
    textAlign: 'center',
    fontSize: 14,
  },
  textWL: {
    color: Colors.grey,
    textAlign: 'center',
    fontSize: 15,
  },
})

export default STYLES
