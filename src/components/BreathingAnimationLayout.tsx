import {StyleSheet, Animated} from 'react-native';
import React from 'react';

import {Colors} from '../styles/Styles';

const BreathingAnimationLayout: React.FC = () => {
  return <Animated.View style={styles.container} />;
};

export default BreathingAnimationLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 300,
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.cyan,
  },
});
