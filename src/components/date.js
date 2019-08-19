import React from 'react';
import { Text } from 'ds';

export const Date = ({ date, timestamp }) => (
  <Text
    as="time"
    dateTime={timestamp}
    lineHeight="solid"
    color="neutral.2"
    fontSize={1}
  >
    {date}
  </Text>
);
