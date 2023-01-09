import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from '../styles/Styles';

const CircleBackground: React.FC = () => {
    return (
        <div style={styles.circle}></div>
    )
};

export default CircleBackground;

const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.gray,
        opacity: 0.1,
        position: 'absolute',
      },
});