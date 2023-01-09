import React from 'react';
import { SafeAreaView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import TabataRunBox from '../components/TabataRunBox';

const { width, height } = Dimensions.get('window');

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SetupTabata')}>
        <TabataRunBox />
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
