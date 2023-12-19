import {StyleSheet} from 'react-native'
import COLORS from '../../themes/colors'
import {widthPercentageToDP} from 'react-native-responsive-screen'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ADDAFA',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
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
  button: {
    paddingHorizontal: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  txt3: {
    color: COLORS.dark,
    fontSize: widthPercentageToDP(5.7),
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    marginHorizontal: '15%',
    marginTop: '10%',
  },
  txt4: {
    color: '#5D5D5D',
    fontSize: widthPercentageToDP(3.9),
    textAlign: 'center',
    marginHorizontal: '5%',
    fontFamily: 'Montserrat-Medium',
    marginTop: '5%',
    lineHeight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paginationStyle: {
    bottom: '30%', // Adjust this value to center the pagination dots vertically.
  },
  txt: {
    color: 'white',
    fontSize: widthPercentageToDP(2),
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
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
  wrapper: {
    // backgroundColor: 'pink',
  },
})

export default STYLES
