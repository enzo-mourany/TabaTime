import {View, Text} from 'react-native';
import React from 'react';

import {IStackScreenProps} from '../lib/StackScreenProps';

const CountdownScreen: React.FC<IStackScreenProps> = ({navigation, route, nameProp}) => {
  return (
    <View>
      <Text>CountdownScreen</Text>
    </View>
  );
};

export default CountdownScreen;
