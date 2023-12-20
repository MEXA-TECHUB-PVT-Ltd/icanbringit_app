import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import { fonts } from '../../themes'

const STYLES = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
  txtInptView: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
  txtInpt: {
    width: '95%',
    backgroundColor: Colors.white,
    color: Colors.dark,
    fontSize: 15,
    alignSelf: 'center',
  },
  frgtpss: {
    alignSelf: 'flex-end',
    color: Colors.secondary,
    marginHorizontal: '3%',
    marginVertical: '1%',

    textTransform: 'uppercase',
  },
  // --or -- stlye
  orView: {
    alignSelf: 'center',
    marginTop: '10%',
    color: Colors.dark,
  },
  // --signup / login text style
  SgnOrIntxt: {
    fontFamily: fonts.railway.regular,
    alignSelf: 'center',
    marginTop: '5%',
    color: Colors.dark,
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default STYLES
