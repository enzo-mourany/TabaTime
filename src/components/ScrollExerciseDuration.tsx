import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useState, useRef} from 'react';

const ScrollExerciseDuration = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [durationExercises, setDurationExercises] = useState(5);

  return (
    <View style={styles.exerciseTimerContainer}>
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
            ev.nativeEvent.contentOffset.x / item_size,
          );
          setDurationExercises(timersExercises[indexExercise]);
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={item_size}
        decelerationRate="fast"
        contentContainerStyle={{paddingHorizontal: item_spacing}}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * item_size,
            index * item_size,
            (index + 1) * item_size,
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
    width: item_size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseScrollContainerText: {
    color: 'white',
    fontSize: 100,
  },
});
