import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';

import TabataRunBox from '../components/TabataRunBox';

const {width, height} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabataRunBox />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: width,
    height: height,
  },
  scrollView: {
    position: 'relative',
    marginTop: 100,
    marginBottom: 150,
  },
  button: {
    position: 'absolute',
    bottom: 70,
  },
});
