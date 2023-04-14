import  {TouchableOpacityProps} from 'react-native'
import { CircleIcon, Container, Text, SelectButtonStyleProps } from "./styles";
import theme from '@theme/index';

type Props = TouchableOpacityProps & SelectButtonStyleProps & {
  label: string;
};

const Select = ({ label, type, selected = false, ...rest }: Props) => {
  return (
    <Container type={type} selected={selected} {...rest}>
      <CircleIcon color={type === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}/>
      <Text>{label}</Text>
    </Container>
  );
};

export default Select;
