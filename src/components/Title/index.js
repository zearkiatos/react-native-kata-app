import React, { memo } from "react";
import Text from '../Text';

const Title = memo(({ title }) => {
  return <Text>{title}</Text>;
});

export default Title;
