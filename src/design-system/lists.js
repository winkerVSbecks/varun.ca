import styled from 'styled-components';
import { Box } from './primitives';

export const FlatList = styled(Box)`
  list-style-type: none;
`;
FlatList.defaultProps = {
  as: 'ul',
  mt: 0,
  mb: 3,
  pl: 0,
};
