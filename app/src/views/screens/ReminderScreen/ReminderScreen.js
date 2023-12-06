import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import COLORS from '../../../consts/colors';
import CustomText from '../../../components/Text';
import Signin_signup_header from '../../../components/button/Signin_signup_header';
import Custom_Button from '../../../components/button/Custom_Button';

const ReminderScreen = () => {
  const hours = Array.from({length: 48}, (_, index) => {
    const hour = Math.floor(index / 2) % 12 || 12;
    const ampm = index < 24 ? 'AM' : 'PM';
    const minute = index % 2 === 0 ? '00' : '30';
    const label = `${hour}:${minute} ${ampm}`;
    return {label, value: index.toString()};
  });

  const scrollViewRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(24);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const handleScroll = event => {
    const {width} = Dimensions.get('window');
    const contentOffset = event.nativeEvent.contentOffset.y;
    const centerIndex = Math.round(contentOffset / width);
    setSelectedIndex(centerIndex);
  };

  const handlePress = index => {
    scrollViewRef.current.scrollTo({y: index * Dimensions.get('window').width});
    setSelectedIndex(index);
  };

  const btnData = [
    {
      id: 1,
      title: 'Mon',
    },
    {
      id: 1,
      title: 'Tue',
    },
    {
      id: 1,
      title: 'Wed',
    },
    {
      id: 1,
      title: 'Thu',
    },
    {
      id: 1,
      title: 'Fri',
    },
    {
      id: 1,
      title: 'Sat',
    },
    {
      id: 1,
      title: 'Sun',
    },
  ];
  const handleButtonPress = index => {
    setSelectedButtonIndex(index);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Signin_signup_header title="Add Reminder" />

      {/* Scrolling time */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        snapToInterval={Dimensions.get('window').width}
        decelerationRate="fast">
        {hours.map((item, index) => (
          <View
            key={index}
            style={[
              styles.timeSlot,
              {
                backgroundColor:
                  index === selectedIndex ? 'lightblue' : 'transparent',
              },
            ]}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => handlePress(index)}>
            <Text style={{marginVertical: 10, fontWeight: 'bold', fontSize:18}}>
              {item.label}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Day list */}
      <View
        style={{
          borderWidth: 0.5,
          borderColor: COLORS.greylight,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          marginTop: 20,
          height: 90,
        }}>
        <CustomText
          text={'Add day'}
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            paddingHorizontal: 20,
            marginTop: 10,
            color:COLORS.black
          }}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={btnData}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            const isSelected = selectedButtonIndex === index;

            return (
              <View style={styles.flatlist_container}>
                <TouchableOpacity
                  style={{
                    backgroundColor: isSelected ? COLORS.blue : 'transparent',
                    borderRadius: 7,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => handleButtonPress(index)}>
                  <CustomText text={item.title} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={{alignSelf:'center', marginTop:"30%"}}>
        <Custom_Button title={'Save Reminder'}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 200, // Adjust the height based on your design
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  timeSlot: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  flatlist_container: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,

    height: 30,
    width: '9%',
  },
});

export default ReminderScreen;
