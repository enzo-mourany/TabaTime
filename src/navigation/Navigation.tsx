import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CountdownScreen from '../screens/CountdownScreen';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Countdown" component={CountdownScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
