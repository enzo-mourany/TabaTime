import React, {useRef} from 'react';
import {SafeAreaView, StatusBar, Animated, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

let timersExercises = [...Array(20).keys()].map((i: number) =>
  i === 0 ? 1 : i * 5,
);
timersExercises.splice(0, 1);
let timersRest = [...Array(13).keys()].map((i: number) =>
  i === 0 ? 1 : i * 5,
);
timersRest.splice(0, 1);

const item_size = width * 0.38;
const item_spacing = (width - item_size) / 2;

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
