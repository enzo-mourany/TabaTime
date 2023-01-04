import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import ScrollExerciseDuration from './ScrollRestDuration';
import ScrollRestDuration from './ScrollRestDuration';

import {Colors} from '../styles/Styles';

const {width, height} = Dimensions.get('window');

const TabataRunBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <ScrollExerciseDuration />
        <ScrollRestDuration />
      </View>
    </View>
  );
};

export default TabataRunBox;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: Colors.darkGray,
    borderRadius: 25,
  },
  scrollView: {
    position: 'relative',
    width: width,
  },
});
