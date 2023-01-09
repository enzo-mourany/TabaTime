import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import StartButton from '../components/StartButton';
import AnimatedWave from '../components/AnimatedWave';
import { DurationContext } from '../states/DurationProvider';
import { RoundsContext } from '../states/RoundsProvider';
import { Colors } from '../styles/Styles';

const { width, height } = Dimensions.get('window');

interface CountdownScreenProps {}

const CountdownScreen: React.FC<CountdownScreenProps> = () => {
  const {durationExercise, durationRest} = useContext(DurationContext);
  const {rounds} = useContext(RoundsContext);

  const [currentRound, setCurrentRound] = useState(1);

  interface IRunningState {
    isRunning: boolean;
  }

  interface IRemainingTimeState {
    remainingTime: number;
  }

  interface ICircularProgressActiveState {
    isCircularProgressActive: boolean;
  }

  const [isRunning, setIsRunning] = useState<IRunningState>({isRunning: false});
  const [isExercise, setIsExercise] = useState(true);
  const [remainingTime, setRemainingTime] = useState<IRemainingTimeState>({
    remainingTime: durationExercise,
  });
  const [isCircularProgressActive, setIsCircularProgressActive] =
    useState<ICircularProgressActiveState>({isCircularProgressActive: false});

  useEffect(() => {
    let interval: any;
    if (isRunning.isRunning && currentRound <= rounds) {
      interval = setInterval(() => {
        setRemainingTime({remainingTime: remainingTime.remainingTime - 1});
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (remainingTime.remainingTime === 0) {
      setIsExercise(!isExercise);
      setRemainingTime({
        remainingTime: isExercise ? durationRest : durationExercise,
      });
      !isExercise && setCurrentRound(currentRound + 1);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTime, isExercise, durationExercise, durationRest]);

  const handleStart = () => {
    setIsRunning({isRunning: !isRunning.isRunning});
    setIsCircularProgressActive({
      isCircularProgressActive:
        !isCircularProgressActive.isCircularProgressActive,
    });
  };

  const handleReset = () => {
    setRemainingTime({remainingTime: durationExercise});
    setIsExercise(true);
    setIsRunning({isRunning: false});
    setIsCircularProgressActive({
      isCircularProgressActive: false,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.countdown}>
        <AnimatedWave />
        <View style={styles.timer}>
          <Text style={styles.textTimer}>{remainingTime.remainingTime}</Text>
          <Text style={styles.exerciseStatus}>
            {isExercise ? 'EXERCISE' : 'REST'}
          </Text>
        </View>
      </View>
      <View style={styles.status}>
        <View style={styles.info}>
          <Text style={styles.exerciseStatus}>Round {currentRound} / {rounds}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={handleStart}>
            <StartButton isRunning={isRunning.isRunning} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CountdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkGray,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countdown: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.4,
    width: width * 0.9,
  },
  timer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTimer: {
    color: Colors.white,
    fontSize: 100,
    fontWeight: 'bold',
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  status: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.5,
  },
  info: {
    width: 200,
    height: '60%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  exerciseStatus: {
    color: Colors.white,
    fontSize: 20,
    opacity: 0.5,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    position: 'relative',
  },
});
