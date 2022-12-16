import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {DurationProvider} from './src/states/DurationProvider';
import routes from './src/config/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DurationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {routes.map((route, i) => (
            <Stack.Screen key={i} name={route.name}>
              {props => <route.component nameProp={route.name} {...props} />}
            </Stack.Screen>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </DurationProvider>
  );
};

export default App;
