import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default (prop) => {
    const { style, ...rest } = prop;
    return <Text {...rest} style={[style, styles.textFont]} />;
};

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'open-sans-bold'
    }
});