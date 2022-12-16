import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DurationProvider} from './src/states/DurationProvider';

import HomeScreen from './src/screens/HomeScreen';

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
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: ' ',
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000000',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DurationProvider>
  );
};

export default App;
