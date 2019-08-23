import React from 'react';
import { Text } from '@ds';

export const Date = ({ date, timestamp, ...props }) => (
  <Text
    as="time"
    dateTime={timestamp}
    lineHeight="solid"
    color="neutral.2"
    fontSize={1}
    {...props}
  >
    {date}
  </Text>
);
