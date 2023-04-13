import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  padding: 16px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${({ theme, type }) =>
    css`
      border: 1px solid
        ${type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1};
      background-color: ${type === 'PRIMARY'
        ? theme.COLORS.GRAY_2
        : theme.COLORS.WHITE};
    `}
`;

export const Label = styled(Text)<Props>`
  ${({ theme, type }) =>
    css`
      font-size: ${theme.FONT_SIZE.BODY_S}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    `}

  line-height: 18px;
`;
