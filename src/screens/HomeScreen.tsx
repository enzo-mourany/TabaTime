import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';
import ScrollRestDuration from '../components/ScrollRestDuration';

const {width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollExerciseDuration />
      <ScrollRestDuration />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: width,
    height: '100%',
  },
});
