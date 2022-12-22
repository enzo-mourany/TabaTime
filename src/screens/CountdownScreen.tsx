import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import StartButton from '../components/StartButton';
import ResetButton from '../components/ResetButton';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedWave from '../components/AnimatedWave';
import CircularProgress from '../components/CircularProgress';
import {DurationContext} from '../states/DurationProvider';
import {Colors} from '../styles/Styles';

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

        if (remainingTime === 1) {
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
      <AnimatedBackground />
      <AnimatedWave />
      <CircularProgress />
      <View style={styles.timer}>
        <Text style={styles.textTimer}>{remainingTime}</Text>
        <Text style={styles.exerciseStatus}>
          {isExercise ? 'REST' : 'EXERCISE'}
        </Text>
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
    fontWeight: 'bold',
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  exerciseStatus: {
    color: Colors.white,
    fontSize: 20,
    opacity: 0.5,
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
});
