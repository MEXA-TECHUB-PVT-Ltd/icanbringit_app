import 'react-native-gesture-handler'
import React, {useEffect} from 'react'
import {SafeAreaView, View, TouchableOpacity} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import COLORS from './src/themes/colors'

import Onboarding from './src/screens/Onboarding/Onboarding'
import Main_Screen from './src/screens/Main_Screen/Main_Screen'
import SignUp from './src/screens/SignUp/SignUp'
import SignIn from './src/screens/SignIn/SignIn'
import Forget_Password from './src/screens/Forget_Password/Forget_Password'
import Verification from './src/screens/Verification/Verification'
import Email_Verification from './src/screens/Email_Verification/Email_Verification'
import Tell_Us_About_Yourself from './src/screens/Tell_Us_About_Yourself/Tell_Us_About_Yourself'
import Add_Profile_photo from './src/screens/Add_Profile_photo/Add_Profile_photo'
import Add_Location from './src/screens/Add_Location/Add_Location'
import Map from './src/screens/Map/Map'
import Reset_Password from './src/screens/Reset_Password/Reset_Password'
import Select_preferences from './src/screens/Select_preferences/Select_preferences'
import Thank_you from './src/screens/Thank_you/Thank_you'
import SplashScreen from 'react-native-splash-screen'
import Explore from './src/screens/Explore/Explore'
import Schedule from './src/screens/Schedule/Schedule'
import Chat from './src/screens/Chat/Chat'
import Add from './src/screens/Add/Add'
import AboutYourSelf from './src/screens/AboutYourSelf/AboutYourSelf'
import ProfilePic from './src/screens/ProfilePic/ProfilePic'
import Notifications from './src/screens/Notifications/Notifications'
import Parties from './src/screens/Parties/Parties'
import Filter from './src/screens/Filter/Filter'
import CreateEvent from './src/screens/CreateEvent/CreateEvent'
import ViewEvent from './src/screens/ViewEvent/ViewEvent'
import ReminderScreen from './src/screens/ReminderScreen/ReminderScreen'
import ChatList from './src/screens/ChatList/ChatList'
import Report from './src/screens/Report/Report'
import DescribeIssue from './src/screens/DescribeIssue/DescribeIssue'
import Profile from './src/screens/Profile/Profile'
import PreferredFood from './src/screens/PreferredFood/PreferredFood'
import PreferredLocation from './src/screens/PreferredLocation/PreferredLocation'
import PreferedEvents from './src/screens/PreferedEvents/PreferedEvents'
import Setting from './src/screens/Setting/Setting'
import PrivacyPolicy from './src/screens/PrivacyPolicy/PrivacyPolicy'
import UpdatePassword from './src/screens/UpdatePassword/UpdatePassword'
import EditProfile from './src/screens/EditProfile/EditProfile'
import GoPremium from './src/screens/GoPremium/GoPremium'
import MyEvent from './src/screens/MyEvent/MyEvent'
import AttendeesList from './src/screens/AttendeesList/AttendeesList'
import AssignedTask from './src/screens/AssignedTask/AssignedTask'
import AssignedTaskDetails from './src/screens/AssignedTaskDetails/AssignedTaskDetails'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            height: 60,
            paddingTop: 5,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: COLORS.blue,
          headerShown: false,
          tabBarInactiveTintColor: 'green',
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({tintColor, focused}) => (
              <MaterialIcons
                name="explore"
                size={24}
                color={focused ? COLORS.blue : COLORS.greylight}
              />
            ),
          }}
          name="Explore"
          component={Explore}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({tintColor, focused}) => (
              <FontAwesome6
                name="calendar-days"
                size={24}
                color={focused ? COLORS.blue : COLORS.greylight}
              />
            ),
          }}
          name="Schedule"
          component={Schedule}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',

            tabBarIcon: ({tintColor, focused}) => (
              <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')}>
                <View
                  style={{
                    bottom: 20,
                    height: 50,
                    backgroundColor: COLORS.blue,
                    width: 50,
                    alignItems: 'center',
                    borderRadius: 25,
                    justifyContent: 'center',
                  }}>
                  <AntDesign
                    name="plussquare"
                    size={24}
                    color={focused ? COLORS.blue : COLORS.greylight}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
          name="Add"
          component={Add}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({tintColor, focused}) => (
              <TouchableOpacity>
                <MaterialIcons
                  name="chat"
                  size={24}
                  color={focused ? COLORS.blue : COLORS.greylight}
                />
              </TouchableOpacity>
            ),
          }}
          name="ChatList"
          component={ChatList}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({tintColor, focused}) => (
              <FontAwesome5
                name="user"
                size={24}
                color={focused ? COLORS.blue : COLORS.greylight}
              />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
const App = ({navigation}) => {
  
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Main_Screen" component={Main_Screen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Forget_Password" component={Forget_Password} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen
            name="Email_Verification"
            component={Email_Verification}
            // kjfksdjkdsf
          />
          <Stack.Screen name="Tell_Us_About_Yourself" component={Tell_Us_About_Yourself} />
          <Stack.Screen name="Add_Profile_photo" component={Add_Profile_photo} />
          <Stack.Screen name="Add_Location" component={Add_Location} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Reset_Password" component={Reset_Password} />
          <Stack.Screen name="Select_preferences" component={Select_preferences} />
          <Stack.Screen name="Thank_you" component={Thank_you} />
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="AboutYourSelf" component={AboutYourSelf} />
          <Stack.Screen name="ProfilePic" component={ProfilePic} />
          {/* <Stack.Screen name="AddLocation" component={AddLocation} /> */}
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Parties" component={Parties} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="CreateEvent" component={CreateEvent} />
          <Stack.Screen name="ViewEvent" component={ViewEvent} />
          <Stack.Screen name="ReminderScreen" component={ReminderScreen} />
          <Stack.Screen name="ChatList" component={ChatList} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="DescribeIssue" component={DescribeIssue} />
          <Stack.Screen name="PreferredFood" component={PreferredFood} />
          <Stack.Screen name="PreferredLocation" component={PreferredLocation} />
          <Stack.Screen name="PreferedEvents" component={PreferedEvents} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="GoPremium" component={GoPremium} />
          <Stack.Screen name="MyEvent" component={MyEvent} />
          <Stack.Screen name="AttendeesList" component={AttendeesList} />
          <Stack.Screen name="AssignedTask" component={AssignedTask} />
          <Stack.Screen name="AssignedTaskDetails" component={AssignedTaskDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
