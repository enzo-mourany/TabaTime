import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {MotiView} from '@motify/components';

import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';
import {DurationContext} from '../states/DurationProvider';
import {Colors} from '../styles/Styles';
import {Easing} from 'react-native-reanimated';

const CountdownScreen: React.FC = () => {
  const {durationExercise, durationRest} = useContext(DurationContext);

  const [isRunning, setIsRunning] = useState(false);
  const [isExercise, setIsExercise] = useState(true);
  const [remainingTime, setRemainingTime] = useState(durationExercise);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setRemainingTime(prev => prev - 1);

        if (remainingTime === 0) {
          setIsExercise(!isExercise);
          setRemainingTime(isExercise ? durationRest : durationExercise);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTime, isExercise, durationExercise, durationRest]);

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setRemainingTime(durationExercise);
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {[...Array(3).keys()].map(index => {
        return (
          <MotiView
            from={{opacity: 0.7, scale: 1}}
            animate={{opacity: 0, scale: 4}}
            transition={{
              type: 'timing',
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: index * 400,
              repeatReverse: false,
              loop: true,
            }}
            key={index}
            style={[StyleSheet.absoluteFillObject, styles.dot]}
          />
        );
      })}
      <View style={styles.timer}>
        <Text style={styles.textTimer}>{remainingTime}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleStart}>
          <StartButton isRunning={isRunning} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReset}>
          <ResetButton />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CountdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  textTimer: {
    color: Colors.white,
    fontSize: 100,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    position: 'relative',
    width: '100%',
    height: '100%',
    bottom: 50,
  },
  dot: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
});
