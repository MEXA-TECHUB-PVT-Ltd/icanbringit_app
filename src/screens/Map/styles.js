import {StyleSheet} from 'react-native'

import {colors, fonts} from '../../themes'
import {wp} from '../../utils/helpers/Dimensions'

const STYLES = StyleSheet.create({
  BUTTONSTYLE: {
    alignItems: 'center',
    top: 20,
    marginTop: 60,
    marginBottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    backgroundColor: colors.irresistible,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    marginLeft: '5%',
    marginBottom: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    height: '89%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: colors.giants_orange,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 320,
    alignSelf: 'center',
    marginTop: '10%',
  },
  txt: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.plusJakrtaSans.semi_bold,
  },
  txt1: {
    color: colors.black,
    fontSize: wp(4.5),
    fontFamily: fonts.plusJakrtaSans.bold,
    marginHorizontal: '3%',
    marginTop: '5%',
  },
  txt2: {
    color: colors.black,
    fontSize: wp(3.2),
    marginTop: '2%',
    fontFamily: fonts.plusJakrtaSans.semi_bold,
    marginLeft: '3%',
    marginRight: '10%',
  },
  inputContainer: {
    height: 170,
    width: '100%',
    alignSelf: 'center',
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.white,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  inputContainer2: {
    height: 46,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    borderColor: colors.gainsboro,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%',
    marginTop: '10%',
    marginBottom: '5%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: '82%',
  },
  input2: {
    backgroundColor: colors.white,
    width: '85%',
    borderRadius: 20,
    paddingLeft: '15%',
    marginLeft: '5%',
    color: colors.black,
  },
  primarybtnContainer: {
    alignSelf: 'center',
    marginTop: '1%',
    marginBottom: '5%',
  },
})

export default STYLES
