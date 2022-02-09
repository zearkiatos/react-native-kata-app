import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";

const Title = memo(({ title }) => {
  console.log("Render");
  return <Text style={styles.text}>{title}</Text>;
});

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-bold'
  }
});

export default Title;
