import { SafeAreaView } from 'react-native';
import React from 'react';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';
import ScrollRestDuration from '../components/ScrollRestDuration';

const SetupTabataScreen = () => {
  return (
    <SafeAreaView>
        <ScrollExerciseDuration />
        <ScrollRestDuration />
    </SafeAreaView>
  )
};

export default SetupTabataScreen;
