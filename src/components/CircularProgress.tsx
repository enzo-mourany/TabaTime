import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {Colors} from '../styles/Styles';

interface CircularProgressProps {
  remainingTime: number;
  initialValue: number;
  isRunning: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  initialValue,
  remainingTime,
  isRunning,
}) => {
  const [progressValue, setProgressValue] = useState(initialValue);

  const size: number = 280;
  const strokeWidth: number = 3;
  const radius: number = (size - strokeWidth) / 2;
  const circum: number = radius * 2 * Math.PI;
  const svgProgress: number = 100 - (progressValue / initialValue) * 100;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = () => {
    return Animated.timing(progressAnimation, {
      toValue: 100,
      duration: initialValue * 1000,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    return Animated.timing(progressAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isRunning) {
      animation();
    }
  }, [isRunning]);

  useEffect(() => {
    progressAnimation.addListener(
      v => {
        const strokeDashoffset = radius * Math.PI * 2 * (v.value / 100);
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [progressAnimation],
    );
  }, [progressAnimation, radius]);

  return (
    <View style={styles.container}>
      <Svg height="280" width="280">
        <Circle
          ref={progressRef}
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
