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
  mb: 3,
};

export const OrderedList = styled(Box)({});
OrderedList.defaultProps = {
  as: 'ol',
  mt: 0,
  mb: 3,
};

export const ListItem = styled(Text)({});
ListItem.defaultProps = {
  as: 'li',
  fontSize: 2,
  mb: 0,
};

// ul:	List,
// ol:	Ordered list,
// li:	List item,
