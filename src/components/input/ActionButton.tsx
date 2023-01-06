import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles/Styles';

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
      <Text style={{
        letterSpacing: 1,
        textAlign: 'center',
      }} adjustsFontSizeToFit numberOfLines={2}>
        {buttonText}
      </Text>
  </TouchableOpacity>
);

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    backgroundColor: Colors.cyan,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: Colors.cyan,
  },
});
