import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../styles/Styles';

const AnimatedBackground: React.FC = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [animation]);

  return (
    <LinearGradient
      colors={[Colors.black, Colors.cyan]}
      style={styles.container}
      start={{x: 1, y: 1}}
      end={{x: 1, y: 0}}
    />
  );
};

export default AnimatedBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '120%',
    position: 'absolute',
  },
});
