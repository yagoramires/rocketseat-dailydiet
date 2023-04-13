import { Container, Label, ButtonTypeStyleProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

type Props = TouchableOpacityProps & {
  type: ButtonTypeStyleProps;
  label: string;
  icon?: string;
};

const Button = ({ type, label, icon, ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      {icon === 'add' ? (
        <Plus size={18} color={type === 'PRIMARY' ? 'white' : 'black'} />
      ) : icon === 'edit' ? (
        <PencilSimpleLine
          size={18}
          color={type === 'PRIMARY' ? 'white' : 'black'}
        />
      ) : icon === 'trash' ? (
        <Trash size={18} color={type === 'PRIMARY' ? 'white' : 'black'} />
      ) : null}
      <Label type={type}>{label}</Label>
    </Container>
  );
};

export default Button;
