import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressCircle = ({ percentage }) => {
  const borderColor = percentage === 100 ? 'green' : 'orange';

  return (
    <View style={[styles.circle, { borderColor }]}>
      <Text style={styles.text}>{percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProgressCircle;