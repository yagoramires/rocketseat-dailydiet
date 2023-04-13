import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: 60,
  color: theme.COLORS.GREEN_MID,
}))``;
