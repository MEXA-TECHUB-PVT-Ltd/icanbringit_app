import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import {colors} from '../../themes'

const STYLES = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.fresh_air,
  },
  errors: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.red,
    marginTop: 5,
  },
  input: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },
  inputMg: {marginHorizontal: '7%', marginTop: '8%'},
  btnContainer: {
    alignSelf: 'center',
    marginTop: '70%',
    marginBottom: '5%',
  },
})

export default STYLES
