import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image``;
export const Profile = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 500px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const MealPercentContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 33px 0 40px;
  padding: 8px;

  min-height: 102px;
  max-height: 102px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
  `}

  margin-bottom: 8px;
`;

export const Percent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
  `}

  margin-top: -10px;
  text-align: center;
`;
export const HeaderText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
  `}
  text-align:center;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))`
  align-self: flex-end;
`;
