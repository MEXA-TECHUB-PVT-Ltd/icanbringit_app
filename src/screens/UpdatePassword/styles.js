import {StyleSheet} from 'react-native'
import Colors from '../../themes/colors'
import { colors, fonts } from '../../themes'
import { hp } from '../../utils/helpers/Dimensions'

const styles = StyleSheet.create({
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
  errors: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.red,
    marginTop: 5,
  },
})

export default styles
