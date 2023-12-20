import {StyleSheet} from 'react-native'
import Colors from '../../themes/colors'
import {widthPercentageToDP} from 'react-native-responsive-screen'
import { colors, fonts } from '../../themes'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.fresh_air,
    alignItems: 'center',
  },

  image: {
    width: 290,
    height: 290,
    alignSelf: 'center',
    marginTop: '16%',
  },
  txt1: {
    color: Colors.dark,
    fontSize: widthPercentageToDP(5.7),
    textAlign: 'center',
    fontFamily: fonts.montserrat.semi_bold,
    marginHorizontal: '15%',
    marginTop: '10%',
  },
  v1: {
    width: '100%',
    marginVertical: '10%',
  },
  btn1: {
    width: '100%',
    backgroundColor: Colors.primary,
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
    backgroundColor: colors.quartz,
    height: 1,
    width: '30%',
    alignSelf: 'center',
  },
  btn2: {
    width: '83%',
    borderColor: Colors.primary,
    borderWidth: 1.5,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: '0%',
    alignSelf: 'center',
  },
  txt2: {
    color: Colors.white,
    fontSize: widthPercentageToDP(4),
    textAlign: 'center',
    fontFamily: fonts.montserrat.semi_bold,
  },
  txt3: {
    color: Colors.primary,
    fontSize: widthPercentageToDP(4),
    textAlign: 'center',
    fontFamily: fonts.montserrat.semi_bold,
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
