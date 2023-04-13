import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  position: relative;

  padding: 24px;

  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const BackBtn = styled.TouchableOpacity`
  justify-self: flex-start;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 999;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
  `}
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
}))``;
