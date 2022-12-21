import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import CountdownScreen from './src/screens/CountdownScreen';

import {DurationProvider} from './src/states/DurationProvider';

const App = () => {
  return (
    <DurationProvider>
      <CountdownScreen />
    </DurationProvider>
  );
};

export default App;
