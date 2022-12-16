import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';

const {width} = Dimensions.get('window');

//let timersRest: number[] = [...Array(13).keys()].map((i: number) => (i + 1) * 5);

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollExerciseDuration />
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
