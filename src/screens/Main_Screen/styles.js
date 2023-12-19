import {StyleSheet} from 'react-native'
import COLORS from '../../themes/colors'
import {widthPercentageToDP} from 'react-native-responsive-screen'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ADDAFA',
    alignItems: 'center',
  },

  image: {
    width: 290,
    height: 290,
    alignSelf: 'center',
    marginTop: '16%',
  },
  txt1: {
    color: COLORS.dark,
    fontSize: widthPercentageToDP(5.7),
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    marginHorizontal: '15%',
    marginTop: '10%',
  },
  v1: {
    width: '100%',
    marginVertical: '10%',
  },
  btn1: {
    width: '100%',
    backgroundColor: COLORS.primary,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
  },
  bigview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  divider: {
    backgroundColor: '#4B4B4B4D',
    // color: '#707070',
    height: 1,
    width: '30%',
    alignSelf: 'center',
  },
  btn2: {
    width: '83%',
    borderColor: COLORS.primary,
    borderWidth: 1.5,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: '0%',
    alignSelf: 'center',
  },
  txt2: {
    color: COLORS.white,
    fontSize: widthPercentageToDP(4),
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  txt3: {
    color: COLORS.primary,
    fontSize: widthPercentageToDP(4),
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  v2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
    marginTop: '4%',
  },
  img: {
    width: 50,
    height: 50,
  },
})

export default STYLES
