import styled from 'styled-components';
import { Box } from './primitives';
import { Text } from './typography';

export const FlatList = styled(Box)`
  list-style-type: none;
`;
FlatList.defaultProps = {
  as: 'ul',
  mt: 0,
  mb: 3,
  pl: 0,
};

export const List = styled(Box)({});
List.defaultProps = {
  as: 'ul',
  mt: 0,
  mb: 4,
};

export const OrderedList = styled(Box)({});
OrderedList.defaultProps = {
  as: 'ol',
  mt: 0,
  mb: 4,
};

export const ListItem = styled(Text)`
  & > ol,
  & > ul {
    margin-bottom: 0;
  }
`;
ListItem.defaultProps = {
  as: 'li',
  fontSize: [2, 3],
  mb: 2,
};
