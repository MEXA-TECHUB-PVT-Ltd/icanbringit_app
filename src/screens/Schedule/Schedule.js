import React, {useState} from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native'

import {Calendar, LocaleConfig} from 'react-native-calendars'

import images from '../../constants/images'
import {colors, theme} from '../../themes'
import {globalStyles as gs} from '../../styles'

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
}

LocaleConfig.defaultLocale = 'en'

const Schedule = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [button1Color, setButton1Color] = useState(colors.white)
  const [button2Color, setButton2Color] = useState(colors.transparent)
  const [button2TextColor, setButton2TextColor] = useState(colors.black)
  const [showEvents, setShowEvents] = useState(true)

  const handleButton1Click = () => {
    setButton1Color(colors.white)
    setButton2Color(colors.transparent)
    setButton2TextColor(colors.black)
    setShowEvents(true)
  }

  const handleButton2Click = () => {
    setButton1Color(colors.transparent)
    setButton2Color(colors.white)
    setButton2TextColor(colors.grey)
    setShowEvents(false)
  }

  const onDayPress = day => setSelectedDate(day.dateString)

  const data = [
    {
      id: '1',
      user: 'Candyland Carnival',
      title: 'Notification Title 1',
      time: '10:00 AM',
    },
    {
      id: '2',
      user: 'Candyland Carnival',
      title: 'Notification Title 2',
      time: '11:30 AM',
    },
    {
      id: '3',
      user: 'Candyland Carnival',
      title: 'Notification Title 3',
      time: '1:45 PM',
    },
    {
      id: '3',
      user: 'Candyland Carnival',
      title: 'Notification Title 3',
      time: '1:45 PM',
    },
    {
      id: '3',
      user: 'Candyland Carnival',
      title: 'Notification Title 3',
      time: '1:45 PM',
    },
  ]
  const data2 = [
    {id: '1', user: 'Candyland Carnival'},
    {id: '2', user: 'Candyland Carnival'},
    {id: '3', user: 'Candyland Carnival'},
    {id: '3', user: 'Candyland Carnival'},
    {id: '3', user: 'Candyland Carnival'},
  ]
  const renderItem2 = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('AssignedTask')}
      style={styles.itemContainer}>
      <Image source={images.profiledp} style={styles.userImage2} />
      <View style={styles.userInfo}>
        <Text style={styles.userName2}>{item.user}</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText22}>Done</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={images.profiledp} style={styles.userImage} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ViewEvent')} style={styles.button}>
          <Text style={styles.buttonText}>Online Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  return (
    <SafeAreaView style={gs.fill}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.transparent}
        translucent={true}
      />
      <View style={styles.container}>
        <Calendar
          onDayPress={onDayPress}
          monthFormat={'MMMM yyyy'}
          hideExtraDays={true}
          markedDates={{
            [selectedDate]: {selected: true, selectedColor: 'blue'},
          }}
          theme={{
            calendarBackground: colors.white,
            textSectionTitleColor: colors.pastel_blue,
            selectedDayBackgroundColor: colors.cerulean,
            selectedDayTextColor: colors.white,
            todayTextColor: colors.cerulean,
            dayTextColor: colors.charcoal,
            textDisabledColor: colors.gainsboro_taupe,
            arrowColor: 'orange',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: theme.light.fontWeight.light,
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: theme.light.fontWeight.light,
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
        <View style={styles.container2}>
          <TouchableOpacity
            style={[styles.button1, {backgroundColor: button1Color}]}
            onPress={handleButton1Click}>
            <Text style={styles.buttonText2}>Upcoming Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button1, {backgroundColor: button2Color}]}
            onPress={handleButton2Click}>
            <Text style={[styles.buttonText2, {color: button2TextColor}]}>Assigned Tasks</Text>
          </TouchableOpacity>
        </View>
        {showEvents ? (
          <View style={styles.container}>
            <FlatList data={data} keyExtractor={item => item.id} renderItem={renderItem} />
          </View>
        ) : (
          <FlatList data={data2} keyExtractor={item => item.id} renderItem={renderItem2} />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 16,
    },
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: colors.lavender,
    borderRadius: 30,
    height: 45,
  },
  button1: {
    padding: 5,
    borderRadius: 18,
    height: 30,
    width: '40%',
    alignSelf: 'center',
  },
  buttonText2: {
    textAlign: 'center',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 12,
    color: colors.grey,
  },
  button: {
    backgroundColor: colors.tufts_blue,
    padding: 5,
    borderRadius: 4,
    marginRight: 8,
    width: '50%',
  },
  buttonText: {
    color: colors.white,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  userImage2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userName2: {
    fontSize: 15,
    color: colors.black, // Text color for the username
    marginRight: 8,
  },
  actionButton: {
    backgroundColor: colors.light_green, // Background color for the button
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  buttonText22: {
    color: colors.white, // Text color for the button
    fontWeight: 'bold',
  },
})

export default Schedule
