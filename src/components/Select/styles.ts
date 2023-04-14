import { TouchableOpacity } from "react-native";
import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type SelectButtonStyleProps = {
  type: "YES" | "NO";
  selected?: boolean;
};

export const Container = styled(TouchableOpacity)<SelectButtonStyleProps>`
  flex: 1;
  padding: 8px;
  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ theme, selected, type }) => css`
    border: 1px solid
      ${!selected
        ? theme.COLORS.GRAY_6
        : type === "YES"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};
    background-color: ${!selected
      ? theme.COLORS.GRAY_6
      : type === "YES"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  line-height: 18px;
`;

export const CircleIcon = styled(Circle).attrs({ size: 8, weight: "fill" })``;
