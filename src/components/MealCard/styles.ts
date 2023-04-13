import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

type StatusViewProps = {
  onDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  flex: 1%;
  min-height: 49px;
  max-height: 49px;

  padding: 16.5px 12px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  margin-bottom: 8px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const TextTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
  `}

  line-height: 15px;
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const TextMealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
  `}
  line-height: 19px;
`;

export const MealStatus = styled(View)<StatusViewProps>`
  width: 14px;
  height: 14px;

  border-radius: 200px;

  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
