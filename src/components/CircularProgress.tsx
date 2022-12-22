import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

import {Colors} from '../styles/Styles';

const CircularProgress = () => {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const path = 'M 100,100 m 0,-90 a 90,90 0 1,1 0,180 a 90,90 0 1,1 0,-180';
  const strokeDasharray = `${(progress / 100) * (Math.PI * 180)} 180`;

  return (
    <View style={styles.container}>
      <Svg height="280" width="280">
        <Circle
          cx="140"
          cy="140"
          r="130"
          stroke={Colors.white}
          strokeWidth="3"
          fill="none"
        />
        <Path
          d={path}
          stroke={Colors.white}
          strokeWidth="20"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={0}
        />
      </Svg>
    </View>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
