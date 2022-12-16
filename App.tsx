import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {DurationProvider} from './src/states/DurationProvider';

import HomeScreen from './src/screens/HomeScreen';
import CountdownScreen from './src/screens/CountdownScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DurationProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            gestureEnable: true,
            gestureDirection: 'horizontal',
            headerMode: 'float',
          }}
          animation="fade">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Countdown" component={CountdownScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DurationProvider>
  );
};

export default App;
