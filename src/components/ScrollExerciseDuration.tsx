import React, {useContext, useRef} from 'react';
import {View, Animated, StyleSheet, Dimensions, Text} from 'react-native';

import {DurationContext} from '../states/DurationProvider';

const {width} = Dimensions.get('window');

const ITEM_SIZE: number = width * 0.38;
const ITEM_SPACING: number = (width - ITEM_SIZE) / 2;

let timersExercises: number[] = [...Array(20).keys()].map(
  (i: number) => (i + 1) * 5,
);

const ScrollExerciseDuration = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {setDurationExercise} = useContext(DurationContext);

  return (
    <View style={styles.exerciseTimerContainer}>
      <Text style={styles.title}>Exercise Duration</Text>
      <Animated.FlatList
        data={timersExercises}
        keyExtractor={item => item.toString()}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        onMomentumScrollEnd={ev => {
          const indexExercise = Math.round(
            ev.nativeEvent.contentOffset.x / ITEM_SIZE,
          );
          setDurationExercise(timersExercises[indexExercise]);
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        contentContainerStyle={{paddingHorizontal: ITEM_SPACING}}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
          });
          return (
            <View style={styles.exerciseScrollContainer}>
              <Animated.Text
                style={[
                  {
                    ...styles.exerciseScrollContainerText,
                    opacity,
                    transform: [
                      {
                        scale,
                      },
                    ],
                  },
                ]}>
                {item}
              </Animated.Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ScrollExerciseDuration;

const styles = StyleSheet.create({
  exerciseTimerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  exerciseScrollContainer: {
    width: ITEM_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseScrollContainerText: {
    color: 'white',
    fontSize: 100,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1,
    opacity: 0.5,
    position: 'absolute',
    top: 10,
  },
});
