import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../styles/Styles';

interface StartButtonProps {
  isRunning: boolean;
}

const StartButton: React.FC<StartButtonProps> = ({isRunning}) => {
  return (
    <View style={styles.button}>
      <LinearGradient
        style={styles.button}
        colors={[Colors.blue, Colors.cyan]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
      </LinearGradient>
    </View>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.darkGray,
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.cyan,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
