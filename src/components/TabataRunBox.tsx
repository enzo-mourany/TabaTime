import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

import { Colors } from '../styles/Styles';

const { width, height } = Dimensions.get('window');

const TabataRunBox: React.FC = () => {
  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Setup Tabata</Text>
        </View>
      </View>
  );
};

export default TabataRunBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.1,
    backgroundColor: Colors.darkGray,
    borderRadius: 25,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
