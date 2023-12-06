import React, { useEffect, useState } from 'react';
import { ScrollView, View, ImageBackground, Text, StatusBar } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';
import { useIsFocused } from '@react-navigation/native';
import appImages from './../../../consts/Images';
import styles from './styles';

const Thank_you = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fillRate = 1; // Rate at which the circle fills

    const fillCircle = () => {
      if (count < 100) {
        // Update count gradually until 100
        const timer = setInterval(() => {
          setCount((prevCount) => Math.min(prevCount + fillRate, 100));
        }, 100); // Interval time between updates in milliseconds

        return () => clearInterval(timer);
      } else {
        navigation.replace('Explore');
      }
    };

    fillCircle(); // Start filling the circle

    return () => {
      // Cleanup if needed
    };
  }, [count, navigation, isFocused]);

  return (
    <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
      <View style={styles.mainv}>
        <ImageBackground source={appImages.bbg} style={{ width: '100%', height: '100%' }} resizeMode="stretch">
          <Text style={styles.txt}>Thank you for providing the information</Text>

          <View style={{ alignSelf: 'center', marginTop: '30%' }}>
            <CircularProgress
              size={170}
              width={10}
              fill={count}
              tintColor="#B6BEA9"
              backgroundColor="#B6BEA959"
              rotation={0}
              lineCap="round"
            >
              {() => <Text style={styles.txt1}>{count}%</Text>}
            </CircularProgress>
          </View>
          <View style={styles.v1}>
            <View style={styles.v2}>
              <Text style={styles.txt3}>Creating Your Account</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Thank_you;