import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';
import ScrollRestDuration from '../components/ScrollRestDuration';
import {IStackScreenProps} from '../lib/StackScreenProps';

const {width} = Dimensions.get('window');

const HomeScreen: React.FC<IStackScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollExerciseDuration />
      <ScrollRestDuration />
      <TouchableOpacity
        onPress={() => navigation.navigate('Countdown')}
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 50,
          right: 50,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: width,
    height: '100%',
  },
});
