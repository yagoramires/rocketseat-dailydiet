import theme from '@theme/index';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;
