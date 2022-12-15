import React, {useRef} from 'react';
import {SafeAreaView, StatusBar, Animated} from 'react-native';

const HomeScreen: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollXRest = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView>
      <StatusBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
