import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../../styles/Styles';

const { width } = Dimensions.get('window');

interface ActionButtonProps {
    onPress: () => void;
    buttonText: string;
    style?: object;
    fontSize?: number;
  }

const ActionButton: React.FC<ActionButtonProps> = ({ onPress, buttonText, style, fontSize = 19 }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      ...styles.container,
      ...style,
    }}>
      <Text style={styles.buttonText} adjustsFontSizeToFit>
        {buttonText}
      </Text>
  </TouchableOpacity>
);

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: width * 0.8,
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.cyan,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: Colors.cyan,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
});
