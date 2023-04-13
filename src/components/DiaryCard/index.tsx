import { Text, FlatList } from 'react-native';
import React from 'react';
import { Container, Title } from './styles';
import MealCard, { MealCardProps } from '@components/MealCard';

type Props = {
  diary: {
    createdAt: string;
    meals: Array<MealCardProps>;
  };
};

const DiaryCard = ({ diary }: Props) => {
  return (
    <Container>
      <Title>{diary.createdAt}</Title>
      <FlatList
        data={diary.meals}
        keyExtractor={(item) => String(item.title)}
        renderItem={({ item }) => <MealCard meal={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default DiaryCard;
