import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import {colors, fonts} from '../../themes'
import { hp, wp } from '../../utils/helpers/Dimensions'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  smIcon: {paddingLeft: 15, flexDirection: 'row'},
  avatarContainer: {marginHorizontal: '7%', marginTop: '0%'},
  txt: {
    color: colors.picton_blue,
    fontFamily: fonts.montserrat.semi_bold,
    fontSize: hp(1.8),
    marginTop: '4%',
    alignSelf: 'flex-end',
  },
  v1: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.gray_o12,
    borderRadius: 100,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  txt1: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
    marginTop: '5%',
    color: Colors.primary,
    fontFamily: fonts.montserrat.semi_bold,
    fontSize: wp(4),
  },
  rbview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '7%',
  },
  btnContainer: {alignSelf: 'center', marginTop: '80%', marginBottom: '5%'},
  divider: {
    marginVertical: '5%',
    backgroundColor: colors.light_black,
  },
  txtimg: {
    marginLeft: '5%',

    color: colors.eerie_black,
    fontFamily: fonts.montserrat.semi_bold,
    fontSize: wp(4),
  },
  upload: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
})

export default STYLES
