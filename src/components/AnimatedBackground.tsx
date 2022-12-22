import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../styles/Styles';

const AnimatedBackground: React.FC = () => {
  return (
    <LinearGradient
      colors={[Colors.darkGray, Colors.cyan]}
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
