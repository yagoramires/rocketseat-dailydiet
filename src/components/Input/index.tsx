import { TextInput, TextInputProps } from 'react-native';
import { Container } from './styles';
import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

const Input = ({ ...rest }: Props) => {
  const { COLORS } = useTheme();
  return <Container {...rest} placeholderTextColor={COLORS.GRAY_3} />;
};

export default Input;
