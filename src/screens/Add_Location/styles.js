import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../themes'
import {hp, screen_width, wp} from '../../utils/helpers/Dimensions'

const STYLES = StyleSheet.create({
  img: {
    height: (screen_width * 50) / 100,
    width: (screen_width * 50) / 100,
    alignSelf: 'center',
    marginVertical: '33%',
  },
  icon: {
    marginTop: '14%',
    marginBottom: '7%',
    marginHorizontal: '5%',
  },
  txt1: {
    color: colors.black,
    fontSize: hp(3.2),
    fontFamily: fonts.montserrat.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
  txt: {
    color: colors.davy_grey,
    fontFamily: fonts.montserrat.medium,
    fontSize: hp(1.9),
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
  btnPrimary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  btnSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    color: colors.primary,
    alignSelf: 'center',
    fontSize: wp(4),
    fontFamily: fonts.montserrat.medium,
  },
})

export default STYLES
