import {StyleSheet} from 'react-native'

import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen'

import COLORS from '../../themes/colors'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  txt: {
    color: '#3FA9F5',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: heightPercentageToDP(1.8),
    marginTop: '4%',
    alignSelf: 'flex-end',
  },
  v1: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#BBBBBB',
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
    color: COLORS.primary,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: widthPercentageToDP(4),
  },
  rbview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '7%',
  },
  divider: {
    marginVertical: '5%',
    backgroundColor: '#00000024',
  },
  txtimg: {
    marginLeft: '5%',

    color: '#191919',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: widthPercentageToDP(4),
  },
  upload: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
})

export default STYLES
