import React, { memo } from "react";
import { Text } from "react-native";

const Title = memo(({ title }) => {
  console.log("Render");
  return <Text>{title}</Text>;
});

export default Title;
