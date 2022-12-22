import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import ScrollExerciseDuration from '../components/ScrollExerciseDuration';
import ScrollRestDuration from '../components/ScrollRestDuration';
import AnimatedBackground from '../components/AnimatedBackground';
import NavigateButton from '../components/NavigateButton';

const {width, height} = Dimensions.get('window');

type HomeScreenProps = {
  navigation: NavigationProp<
    Record<string, object | undefined>,
    string,
    {},
    {}
  >;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedBackground />
      <View style={styles.scrollView}>
        <ScrollExerciseDuration />
        <ScrollRestDuration />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Countdown')}
        style={styles.button}>
        <NavigateButton />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: width,
    height: height,
  },
  scrollView: {
    position: 'relative',
    marginTop: 100,
    marginBottom: 150,
  },
  button: {
    position: 'absolute',
    bottom: 70,
  },
});
