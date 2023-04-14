import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const MainContainer = styled.View`
  flex: 1;
  padding: 40px 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const FormContainer = styled.View`
  flex: 1;
`;

export const OptionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 32px;
`;

export const Option = styled.View`
  flex: 1;
  max-height: 100%;
`;
