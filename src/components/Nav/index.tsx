import { useNavigation } from '@react-navigation/native';
import { Container, BackBtn, BackIcon, Title } from './styles';

type Props = {
  title: string;
};

const Nav = ({ title }: Props) => {
  const navigation = useNavigation();

  const handleBackBtn = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <BackBtn onPress={handleBackBtn}>
        <BackIcon />
      </BackBtn>
      <Title>{title}</Title>
    </Container>
  );
};

export default Nav;
