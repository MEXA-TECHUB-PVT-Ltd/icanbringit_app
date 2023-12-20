import React from 'react'
import {View, Image, TouchableOpacity, FlatList, Text, StatusBar, StyleSheet} from 'react-native'

import Colors from '../../themes/colors'
import CustomText from '../../components/Text'
import Header from '../../components/Header/Header'
import notificationData from '../../data/notification-data'
import {globalPaddingStyles as gps, globalStyles as gs} from '../../styles'

const Notifications = () => {
  return (
    <View style={gs.fill}>
      <StatusBar translucent={true} />
      <Header title={'Notifications'} />
      <FlatList
        ListHeaderComponent={() => <Text>Today</Text>}
        showsHorizontalScrollIndicator={false}
        data={notificationData}
        renderItem={({item, ind}) => (
          <View style={styles.listItemContainer}>
            <View style={{height: 120}}>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Image source={item.image} style={styles.img} />
                <View style={{width: '60%'}}>
                  <CustomText text={item.title} style={gps.pt10} />
                </View>
                <CustomText text={item.time} style={{fontSize: 12, marginTop: 11}} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  paddingRight: 20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.old_silver_o2,
                    padding: 10,
                    marginRight: 10,
                    borderRadius: 10,
                  }}>
                  <CustomText text={item.type} style={{color: Colors.black}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer}>
                  <CustomText text={item.type} style={{color: Colors.white}} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {paddingHorizontal: 20, paddingTop: 15},
  divider: {height: 0.5, backgroundColor: Colors.old_silver_o2},
  btnContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  img: {height: 50, width: 50, marginHorizontal: 10},
})

export default Notifications
