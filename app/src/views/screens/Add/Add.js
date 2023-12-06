import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Your component code
const Add = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    // Navigate to the new screen (AnotherScreen) without showing the tab bar
    navigation.replace('AnotherScreen');

    // If you want to pass parameters, you can do it like this:
    // navigation.replace('AnotherScreen', { param1: 'value1', param2: 'value2' });
  };

  return (
    <View>
      {/* Your existing UI components */}
      <TouchableOpacity onPress={handleButtonClick}>
        {/* Your button or other UI components */}
      </TouchableOpacity>
    </View>
  );
};

export default Add;