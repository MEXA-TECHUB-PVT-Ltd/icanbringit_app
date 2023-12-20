import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {colors, fonts} from '../../themes'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.fresh_air,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: '5%',
  },
  v: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '18%',
    width: '20%',
  },

  slide: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 330,
    alignSelf: 'center',
    marginTop: '25%',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '9%',
    marginBottom: '10%',
  },
  button: {
    paddingHorizontal: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  txt3: {
    color: Colors.dark,
    fontSize: wp(5.7),
    textAlign: 'center',
    fontFamily: fonts.montserrat.semi_bold,
    marginHorizontal: '15%',
    marginTop: '10%',
  },
  txt4: {
    color: colors.davy_grey,
    fontSize: wp(3.9),
    textAlign: 'center',
    marginHorizontal: '5%',
    fontFamily: fonts.montserrat.medium,
    marginTop: '5%',
    lineHeight: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paginationStyle: {
    bottom: '30%', // Adjust this value to center the pagination dots vertically.
  },
  txt: {
    color: colors.white,
    fontSize: wp(2),
  },

  btnl: {
    width: 45,
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'center',
  },
  txtl: {
    color: colors.white,
    fontSize: 16,
    alignSelf: 'center',
  },
  wrapper: {},
})

export default STYLES
