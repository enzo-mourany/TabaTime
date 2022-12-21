import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {DurationContext} from '../states/DurationProvider';

const CountdownScreen: React.FC = () => {
  const {durationExercise, durationRest} = useContext(DurationContext);

  const [isRunning, setIsRunning] = useState(false);
  const [isExercise, setIsExercise] = useState(true);
  const [remainingTime, setRemainingTime] = useState(durationExercise);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setRemainingTime(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <SafeAreaView>
      <Text>{remainingTime}</Text>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CountdownScreen;
