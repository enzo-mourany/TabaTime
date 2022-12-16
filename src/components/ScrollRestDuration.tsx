import {View, Animated, StyleSheet, Dimensions} from 'react-native';
import React, {useContext, useRef} from 'react';

import {DurationContext} from '../states/DurationProvider';

const {width} = Dimensions.get('window');

let timersRest: number[] = [...Array(13).keys()].map(
  (i: number) => (i + 1) * 5,
);

const itemSize: number = width * 0.38;
const itemSpacing: number = (width - itemSize) / 2;

const ScrollExerciseDuration = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {setDurationRest} = useContext(DurationContext);

  return (
    <View style={styles.exerciseTimerContainer}>
      <Animated.FlatList
        data={timersRest}
        keyExtractor={item => item.toString()}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        onMomentumScrollEnd={ev => {
          const indexRestValue = Math.round(
            ev.nativeEvent.contentOffset.x / itemSize,
          );
          setDurationRest(timersRest[indexRestValue]);
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemSize}
        decelerationRate="fast"
        contentContainerStyle={{paddingHorizontal: itemSpacing}}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * itemSize,
            index * itemSize,
            (index + 1) * itemSize,
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
    width: itemSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseScrollContainerText: {
    color: 'white',
    fontSize: 100,
  },
});
