import {StyleSheet} from 'react-native'

import {widthPercentageToDP} from 'react-native-responsive-screen'

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
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
    // backgroundColor:'pink'
  },
  button: {
    paddingHorizontal: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  txt3: {
    color: '#2B2B2B',
    fontSize: widthPercentageToDP(7),
    textAlign: 'center',
    fontFamily: 'Mulish-SemiBold',
    marginHorizontal: '15%',
    marginTop: '10%',
  },
  txt4: {
    color: '#2B2B2B',
    fontSize: widthPercentageToDP(3.5),
    textAlign: 'center',
    marginHorizontal: '5%',
    fontFamily: 'Mulish-Medium',
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
    padding: '3.5%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'center',
    width: 300,
    backgroundColor: '#FF0180',
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
