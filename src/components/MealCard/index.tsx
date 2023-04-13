import {
  Container,
  Divider,
  MealStatus,
  TextContainer,
  TextMealTitle,
  TextTime,
} from './styles';
import React from 'react';

export type MealCardProps = {
  title: string;
  time: string;
  onDiet: boolean;
  description: string;
};

type Props = {
  meal: MealCardProps;
};

const MealCard = ({ meal }: Props) => {
  return (
    <Container>
      <TextContainer>
        <TextTime>{meal.time}</TextTime>
        <Divider />
        <TextMealTitle>{meal.title}</TextMealTitle>
      </TextContainer>
      <MealStatus onDiet={meal.onDiet} />
    </Container>
  );
};

export default MealCard;
