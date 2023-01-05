import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

import ScrollExerciseDuration from './ScrollExerciseDuration';
import ScrollRestDuration from './ScrollRestDuration';
import NavigateButton from '../components/NavigateButton';

import {Colors} from '../styles/Styles';

const {width, height} = Dimensions.get('window');

const TabataRunBox = () => {
  const [open, setOpen] = useState(false);

  const scaleValue = useRef(new Animated.Value(0.6)).current;

  const handleOpen = () => {
    setOpen(!open);
    console.log(open);

    Animated.timing(scaleValue, {
      toValue: open ? 0.6 : 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{...styles.container, transform: [{scaleY: scaleValue}]}}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={handleOpen}>
        <View style={styles.scrollView}>
          <ScrollExerciseDuration />
          <ScrollRestDuration />
        </View>
        <NavigateButton />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TabataRunBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: Colors.darkGray,
    borderRadius: 25,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    //width: width,
  },
});
