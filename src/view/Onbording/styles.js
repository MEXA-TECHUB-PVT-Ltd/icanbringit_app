import {StyleSheet} from 'react-native'

import {widthPercentageToDP} from 'react-native-responsive-screen'
import {colors, fonts} from '../../themes'
import Colors from '../../themes/Colors'

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: '5%',
  },
  v: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '7%',
    width: '15%',
  },

  slide: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 330,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  txt3: {
    color: Colors.bright_green,
    fontSize: widthPercentageToDP(7),
    textAlign: 'center',
    fontFamily: fonts.mulish.semi_bold,
    marginHorizontal: '15%',
    marginTop: '10%',
  },
  txt4: {
    color: Colors.bright_green,
    fontSize: widthPercentageToDP(3.5),
    textAlign: 'center',
    marginHorizontal: '5%',
    fontFamily: fonts.mulish.medium,
    marginTop: '5%',
    lineHeight: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paginationStyle: {
    bottom: '30%', // Adjust this value to center the pagination dots vertically.
  },
  txt: {
    color: Colors.white,
    fontSize: widthPercentageToDP(2),
  },

  btnl: {
    padding: '3.5%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'center',
    width: 300,
    backgroundColor: Colors.dark_pink,
  },
  txtl: {
    color: Colors.white,
    fontSize: 16,
    alignSelf: 'center',
  },
  wrapper: {},
})

export default STYLES
