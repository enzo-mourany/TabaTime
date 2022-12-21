import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {DurationContext} from '../states/DurationProvider';

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

  return (
    <SafeAreaView>
      <Text>{remainingTime}</Text>
      <TouchableOpacity onPress={handleStart}>
        <Text>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CountdownScreen;
