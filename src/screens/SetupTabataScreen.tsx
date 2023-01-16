import { SafeAreaView, StyleSheet, Image, Dimensions, View, TouchableOpacity } from 'react-native';
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
      <View style={styles.scrollContainer}>
        <ScrollExerciseDuration />
        <ScrollRestDuration />
        <ScrollRoundsNumber />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Countdown')}>
        <ActionButton text="Start Tabata" />
      </TouchableOpacity>
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
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    paddingTop: 50,
    paddingBottom: 50,
  },
});
