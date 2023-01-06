import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';
import ScrollRestDuration from '../components/ScrollRestDuration';
import ScrollRoundsNumber from '../components/ScrollRoundsNumber';

import ActionButton from '../components/input/ActionButton';

interface SetupTabataScreenProps {
  navigation: NavigationProp<any>;
}

const SetupTabataScreen: React.FC<SetupTabataScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollExerciseDuration />
      <ScrollRestDuration />
      <ScrollRoundsNumber />
      <ActionButton
        onPress={() => navigation.navigate('Countdown')}
        buttonText="Start Tabata"
      />
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
