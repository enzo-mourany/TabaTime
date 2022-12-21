import {View, Text} from 'react-native';
import React from 'react';

import {DurationContext} from '../states/DurationProvider';

const CountdownScreen: React.FC = () => {
  const {durationExercise, durationRest} = React.useContext(DurationContext);

  const [isRunning, setIsRunning] = React.useState(false);
  const [isExercise, setIsExercise] = React.useState(true);
  const [remaintingTime, setRemaintingTime] = React.useState(durationExercise);

  return (
    <View>
      <Text>CountdownScreen</Text>
    </View>
  );
};

export default CountdownScreen;
