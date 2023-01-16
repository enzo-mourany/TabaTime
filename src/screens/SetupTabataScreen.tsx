import { SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';
import ScrollRestDuration from '../components/ScrollRestDuration';
import ScrollRoundsNumber from '../components/ScrollRoundsNumber';

import ActionButton from '../components/input/ActionButton';

const { width, height } = Dimensions.get('window');

interface SetupTabataScreenProps {
  navigation: NavigationProp<any>;
}

const SetupTabataScreen: React.FC<SetupTabataScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/img/background.png')} 
        style={{position: 'absolute', top: 0, left: 0, width: width, height: height}}
      />
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
