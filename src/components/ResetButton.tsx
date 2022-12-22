import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Colors} from '../styles/Styles';

const ResetButton: React.FC = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Reset</Text>
    </View>
  );
};

export default ResetButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.cyan,
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
