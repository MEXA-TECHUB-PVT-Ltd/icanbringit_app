import {StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import { colors } from '../../themes'

const STYLES = StyleSheet.create({
  bg: {
    flex: 1,
  },
  mainv: {
    flex: 1,
  },
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
})

export default STYLES
