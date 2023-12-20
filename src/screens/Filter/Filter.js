import React, {useRef} from 'react'
import {Text, View} from 'react-native'

import RBSheet from 'react-native-raw-bottom-sheet'
import { globalMarginStyles as gms, globalStyles } from '../../styles'

const Filter = () => {
  const ref_RBSheetCamera = useRef(null)

  return (
    <View>
      <RBSheet
        ref={ref_RBSheetCamera}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 250,
          },
        }}>
        <View
          style={[globalStyles.row, gms.mh10]}>
          <Text>Select an option</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 10,
          }}></View>
      </RBSheet>
    </View>
  )
}

export default Filter