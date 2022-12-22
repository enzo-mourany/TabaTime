import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {Colors} from '../styles/Styles';

const CircularProgress = () => {
  let size = 280;
  let strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - 80;

  return (
    <View style={styles.container}>
      <Svg height="280" width="280">
        <Circle
          stroke={Colors.white}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
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
