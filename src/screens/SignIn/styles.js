import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import {colors, fonts} from '../../themes'
import {hp, isIos} from '../../utils/helpers/Dimensions'

const STYLES = StyleSheet.create({
  bigview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
  },
  emailInputContainer: {marginHorizontal: '7%', marginTop: '8%'},
  divider: {
    backgroundColor: colors.quartz,
    height: 1,
    width: '30%',
    alignSelf: 'center',
  },
  submitBtnContainer: {
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: '5%',
  },
  txt: {
    color: colors.picton_blue,
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
  mh23: {marginHorizontal: 23},
  v2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '4%',
    width: isIos ? '60%' : '40%'
  },
  smtext: {
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
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
  errors: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.red,
    marginTop: 5,
  },
})

export default STYLES
