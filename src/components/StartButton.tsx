import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../styles/Styles';

const { width, height } = Dimensions.get('window');

interface StartButtonProps {
  isRunning: boolean;
}

const StartButton: React.FC<StartButtonProps> = ({isRunning}) => {
  return (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={[Colors.purple, Colors.pink]} 
      style={styles.button}
    >
      <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
    </LinearGradient>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.purple,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
