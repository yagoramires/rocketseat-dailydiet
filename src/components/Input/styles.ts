import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View``;
export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const FormInput = styled(TextInput)`
  flex: 1;
  min-height: 48px;
  max-height: 48px;
  padding: 14px;

  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_2};
    border: 1px solid ${theme.COLORS.GRAY_5};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
