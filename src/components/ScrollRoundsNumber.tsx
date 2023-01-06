import React, {useContext, useRef} from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';

import { RoundsContext } from '../states/RoundsProvider';

const {width} = Dimensions.get('window');

const ITEM_SIZE: number = width * 0.38;
const ITEM_SPACING: number = (width - ITEM_SIZE) / 2;

let roundsNumber: number[] = [...Array(20).keys()].map(
  (i: number) => (i + 1),
);

const ScrollRoudsNumber = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {setRounds} = useContext(RoundsContext);

  return (
    <View style={styles.roundsNumberContainer}>
      <Animated.FlatList
        data={roundsNumber}
        keyExtractor={item => item.toString()}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        onMomentumScrollEnd={ev => {
          const indexRound = Math.round(
            ev.nativeEvent.contentOffset.x / ITEM_SIZE,
          );
          setRounds(roundsNumber[indexRound]);
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
            <View style={styles.roundsScrollContainer}>
              <Animated.Text
                style={[
                  {
                    ...styles.roundsScrollContainerText,
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

export default ScrollRoudsNumber;

const styles = StyleSheet.create({
  roundsNumberContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  roundsScrollContainer: {
    width: ITEM_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundsScrollContainerText: {
    color: 'white',
    fontSize: 100,
  },
});
