import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import {DurationProvider} from './src/states/DurationProvider';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <DurationProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </DurationProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
});
