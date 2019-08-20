import React from 'react';
import { Divider } from './primitives';
import { H1 } from './typography';

export const PageHeader = ({ title, children }) => (
  <header>
    <H1>{title}</H1>
    {children}
    <Divider />
  </header>
);
