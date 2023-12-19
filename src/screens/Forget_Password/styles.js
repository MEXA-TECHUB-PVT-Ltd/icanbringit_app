import {StyleSheet} from 'react-native'

import COLORS from '../../themes/colors'

const STYLES = StyleSheet.create({
  bg: {
    flex: 1,
  },
  mainv: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: '#ADDAFA',
  },
  input: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
  },
  errors: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 5,
  },
})

export default STYLES
