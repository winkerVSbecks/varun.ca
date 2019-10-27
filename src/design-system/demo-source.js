import React from 'react';
import { ButtonLink } from './buttons';
import { Text } from './typography';

export const DemoSource = ({ demo, source }) => (
  <Text mb={5} textAlign="center" display={['flex', 'block']}>
    <ButtonLink flex="1 1 auto" to={demo}>
      Demo
    </ButtonLink>
    <ButtonLink flex="1 1 auto" to={source} mr={0}>
      Source
    </ButtonLink>
  </Text>
);
