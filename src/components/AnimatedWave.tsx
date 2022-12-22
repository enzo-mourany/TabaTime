import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const AnimatedWave = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const growAnimation = () => {
    Animated.timing(scale, {
      toValue: 1.5,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => shrinkAnimation());
  };

  const shrinkAnimation = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => growAnimation());
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, {transform: [{scale}]}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

export default AnimatedWave;
