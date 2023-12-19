import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import COLORS from '../../themes/colors'
const STYLES = StyleSheet.create({
  bg: {
    flex: 1,
  },
  mainv: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: '#ADDAFA',
  },
  btn2: {
    width: '83%',
    borderColor: COLORS.primary,
    borderWidth: 1.5,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: '5%',
    alignSelf: 'center',
  },
  txt1: {
    color: COLORS.primary,
    fontSize: heightPercentageToDP(1.8),
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  txt3: {
    color: COLORS.primary,
    fontSize: widthPercentageToDP(4),
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
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
    fontFamily: 'Montserrat-Medium',
    borderWidth: 1,
    borderColor: '#E4DFDF',
    backgroundColor: '#ffff',
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingTop: '1%',
  },
  focusCell: {
    borderColor: '#B6BEA9',
    backgroundColor: 'white',
    fontFamily: 'Laila-Medium',
    paddingTop: '2%',
  },
  textWS: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 14,
  },
  textWL: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 15,
  },
})

export default STYLES
