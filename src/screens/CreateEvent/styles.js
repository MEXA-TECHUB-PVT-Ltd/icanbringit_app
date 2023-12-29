import {StyleSheet} from 'react-native'

import { colors, fonts } from '../../themes'
import { hp, wp } from '../../utils/helpers/Dimensions'

const STYLES = StyleSheet.create({
  bg: {
    flex: 1,
  },
  mainv: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  txt: {
    color: colors.black,
    fontSize: hp(3.2),
    fontFamily: fonts.montserrat.bold,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: '11%',
  },
  optionsView: {
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: 'lightgray',
    width: 280,
    height: 40,
    marginTop: '5%',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    textAlign: 'center',
    fontSize: wp(4),
    fontFamily: fonts.montserrat.regular,
  },
  btnl: {
    width: '100%',
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'center',
  },
  v1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20%',
  },
  txt1: {
    color: colors.black,
    fontSize: 20,
    textAlign: 'center',
    fontSize: wp(4.5),
    fontFamily: fonts.montserrat.bold,
  },
  txt2: {
    color: colors.old_silver,
    fontSize: 20,
    textAlign: 'center',
    fontSize: wp(4.5),
    fontFamily: fonts.montserrat.regular,
  },
  p: {
    borderRadius: 20,
    width: '100%',
    height: 5,
    marginTop: '5%',
  },
})

export default STYLES
