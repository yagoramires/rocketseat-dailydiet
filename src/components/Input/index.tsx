import { TextInput, TextInputProps } from 'react-native';
import { Container, Label, FormInput } from './styles';
import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>;
};

const Input = ({ label, inputRef, ...rest }: Props) => {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Label>{label}</Label>
      <FormInput {...rest} placeholderTextColor={COLORS.GRAY_3} />
    </Container>
  );
};

export default Input;
