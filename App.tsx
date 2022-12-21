import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

import {DurationProvider} from './src/states/DurationProvider';

const App = () => {
  return (
    <DurationProvider>
      <HomeScreen />
    </DurationProvider>
  );
};

export default App;
