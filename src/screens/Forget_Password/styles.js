import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import {colors} from '../../themes'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.fresh_air,
  },
  input: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },
  formContainer: {marginHorizontal: '7%', marginTop: '25%'},
  emailContainer: {marginHorizontal: '7%', marginTop: '8%'},
  btn: {
    alignSelf: 'center',
    marginTop: '70%',
    marginBottom: '5%',
  },
  btnContainer: {
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: '5%',
  },
  errors: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.red,
    marginTop: 5,
  },
})

export default STYLES
