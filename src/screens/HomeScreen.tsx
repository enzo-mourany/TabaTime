import React, {useContext, useRef} from 'react';
import {
  SafeAreaView,
  Animated,
  Dimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {DurationContext, DurationProvider} from '../states/DurationProvider';

const {width} = Dimensions.get('window');

let timersExercises: number[] = [...Array(20).keys()].map(
  (i: number) => (i + 1) * 5,
);
//let timersRest: number[] = [...Array(13).keys()].map((i: number) => (i + 1) * 5);

const item_size = width * 0.38;
const item_spacing = (width - item_size) / 2;

const HomeScreen: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {durationExercises, setDurationExercises} = useContext(DurationContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exerciseTimerContainer}>
        <Text style={{color: 'white', fontSize: 50}}>{durationExercises}</Text>
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: width,
    height: '100%',
  },
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
