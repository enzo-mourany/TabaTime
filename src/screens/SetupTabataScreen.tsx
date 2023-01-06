import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';
import ScrollRestDuration from '../components/ScrollRestDuration';
import ScrollRoundsNumber from '../components/ScrollRoundsNumber';

const SetupTabataScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollExerciseDuration />
      <ScrollRestDuration />
      <ScrollRoundsNumber />
    </SafeAreaView>
  )
};

export default SetupTabataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
