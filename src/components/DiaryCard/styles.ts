import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  gap: 8px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
  `}
`;
