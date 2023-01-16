import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../../styles/Styles';

const { width, height } = Dimensions.get('window');

interface ActionButtonProps {
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={[Colors.purple, Colors.pink]} 
      style={styles.button}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </LinearGradient>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.cyan,
    blurRadius: 20,
    width: width * 0.9,
    height: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.cyan,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
