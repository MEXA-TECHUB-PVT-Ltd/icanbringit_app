import {StyleSheet} from 'react-native'

import {heightPercentageToDP} from 'react-native-responsive-screen'

import COLORS from '../../themes/colors'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bigview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  divider: {
    backgroundColor: '#4B4B4B4D',
    height: 1,
    width: '30%',
    alignSelf: 'center',
  },
  txt: {
    color: '#3FA9F5',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: heightPercentageToDP(1.8),
    marginTop: '4%',
    alignSelf: 'flex-end',
  },
  txt1: {
    color: COLORS.grey,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: heightPercentageToDP(1.8),
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
    color: '#676767',
    fontFamily: 'Montserrat-Medium',
    fontSize: heightPercentageToDP(1.8),
  },
  txt3: {
    color: COLORS.primary,
    fontFamily: 'Montserrat-Bold',
    fontSize: heightPercentageToDP(1.8),
  },

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++

  dropdown: {
    height: 50,
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: '2%',
    marginBottom: '4%',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    color: '#949494',
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: heightPercentageToDP(2),
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#949494',
  },
  selectedTextStyle: {
    fontSize: heightPercentageToDP(2),
    marginLeft: '3%',
    color: '#949494',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})

export default STYLES
