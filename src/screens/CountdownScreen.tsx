import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {DurationContext} from '../states/DurationProvider';
import {Colors} from '../styles/Styles';

const {width, height} = Dimensions.get('window');

const CountdownScreen: React.FC = () => {
  const {durationExercise, durationRest} = useContext(DurationContext);

  const [isRunning, setIsRunning] = useState(false);
  const [isExercise, setIsExercise] = useState(true);
  const [remainingTime, setRemainingTime] = useState(durationExercise);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setRemainingTime(prev => prev - 1);

        if (remainingTime === 0) {
          setIsExercise(!isExercise);
          setRemainingTime(isExercise ? durationRest : durationExercise);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTime, isExercise, durationExercise, durationRest]);

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setRemainingTime(durationExercise);
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.textTimer}>{remainingTime}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleStart} style={styles.startButton}>
          <LinearGradient
            style={styles.startButton}
            colors={[Colors.blue, Colors.cyan]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.startButtonText}>
              {isRunning ? 'Pause' : 'Start'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CountdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  textTimer: {
    color: Colors.white,
    fontSize: 100,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    position: 'relative',
    width: '100%',
    height: '100%',
    bottom: 50,
  },
  startButton: {
    backgroundColor: Colors.darkGray,
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: Colors.white,
    fontSize: 20,
  },
  resetButton: {
    backgroundColor: Colors.darkGray,
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    color: Colors.white,
    fontSize: 20,
  },
});
