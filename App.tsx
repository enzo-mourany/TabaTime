import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

import { DurationProvider } from './src/states/DurationProvider';
import { RoundsProvider } from './src/states/RoundsProvider';

const App = () => {
  return (
    <NavigationContainer>
      <DurationProvider>
        <RoundsProvider>
          <Navigation />
        </RoundsProvider>
      </DurationProvider>
    </NavigationContainer>
  );
};

export default App;
