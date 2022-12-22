import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

import {Colors} from '../styles/Styles';

const AnimatedWave = () => {
  const firstCircleScale = useRef(new Animated.Value(3)).current;
  const secondCircleScale = useRef(new Animated.Value(4.5)).current;
  const thirdCircleScale = useRef(new Animated.Value(6)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(firstCircleScale, {
          toValue: 3.5,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(firstCircleScale, {
          toValue: 3,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, [firstCircleScale]);

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(secondCircleScale, {
          toValue: 5,
          duration: 3000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(secondCircleScale, {
          toValue: 4.5,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, [secondCircleScale]);

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(thirdCircleScale, {
          toValue: 6.5,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(thirdCircleScale, {
          toValue: 6,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, [thirdCircleScale]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, {transform: [{scale: firstCircleScale}]}]}
      />
      <Animated.View
        style={[styles.circle, {transform: [{scale: secondCircleScale}]}]}
      />
      <Animated.View
        style={[styles.circle, {transform: [{scale: thirdCircleScale}]}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
    opacity: 0.1,
    position: 'absolute',
  },
});

export default AnimatedWave;
