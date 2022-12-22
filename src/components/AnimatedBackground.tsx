import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';

const AnimatedBackground = () => {
  const backgroundColor = useRef(new Animated.Value(0)).current;
  const shapeSize = useRef(new Animated.Value(100)).current;
  const shapeOpacity = useRef(new Animated.Value(1)).current;

  const animateBackground = () => {
    backgroundColor.setValue(0);
    shapeSize.setValue(100);
    shapeOpacity.setValue(1);

    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => animateBackground());

    Animated.timing(shapeSize, {
      toValue: 200,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(shapeOpacity, {
      toValue: 0,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateBackground();
  }, []);

  const backgroundColorInterpolate = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)'],
  });

  const shapeSizeInterpolate = shapeSize.interpolate({
    inputRange: [100, 200],
    outputRange: ['50%', '100%'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColorInterpolate,
        },
      ]}>
      <Animated.View
        style={[
          styles.shape,
          {
            width: shapeSizeInterpolate,
            height: shapeSizeInterpolate,
            opacity: shapeOpacity,
          },
        ]}
      />
      <View style={styles.overlay}>
        <Text>Animated Background with Blur</Text>
      </View>
    </Animated.View>
  );
};

export default AnimatedBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shape: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
