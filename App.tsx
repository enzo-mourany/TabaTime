import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

import {DurationProvider} from './src/states/DurationProvider';

const App = () => {
  return (
    <NavigationContainer>
      <DurationProvider>
        <Navigation />
      </DurationProvider>
    </NavigationContainer>
  );
};

export default App;
