import Button from '@components/Button';
import {
  Container,
  Header,
  HeaderText,
  Icon,
  Label,
  Logo,
  MealPercentContainer,
  Percent,
  Profile,
} from './styles';
import { useState } from 'react';

import LogoImg from '@assets/logo.png';
import { FlatList } from 'react-native';
import MealCard from '@components/DiaryCard';

const Home = () => {
  const percent = '90,86%';
  const mealsData = [
    {
      createdAt: '13/04/2023',
      meals: [
        {
          time: '20:00',
          title: 'X-Tudo',
          onDiet: true,
          description: 'Blablabla',
        },
      ],
    },
    {
      createdAt: '12/04/2023',
      meals: [
        {
          time: '18:00',
          title: 'Arroz feijao e salada',
          onDiet: false,
          description: 'Blablabla',
        },
        {
          time: '16:00',
          title: 'Whey Protein',
          onDiet: false,
          description: 'Blablabla',
        },
        {
          time: '12:00',
          title: 'Frango cozido',
          onDiet: false,
          description: 'Blablabla',
        },
        {
          time: '8:00',
          title: 'Pão com Ovo',
          onDiet: false,
          description: 'Blablabla',
        },
      ],
    },
  ];

  const handlePercentClick = () => {
    console.log('teste');
  };

  return (
    <Container>
      <Header>
        <Logo source={LogoImg} />
        <Profile />
      </Header>
      <MealPercentContainer onPress={handlePercentClick}>
        <Icon />
        <Percent>{percent}</Percent>
        <HeaderText>das refeições dentro da dieta</HeaderText>
      </MealPercentContainer>
      <Label>Refeições</Label>
      <Button label='Nova refeição' type='PRIMARY' icon='add' />
      <FlatList
        data={mealsData}
        keyExtractor={(item) => String(item.createdAt)}
        renderItem={({ item }) => <MealCard diary={item} />}
        ListEmptyComponent={<Label>empty</Label>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { marginTop: 32 },
          { paddingBottom: 100 },
          mealsData.length === 0 && {
            flex: 1,
          },
        ]}
      />
    </Container>
  );
};

export default Home;
