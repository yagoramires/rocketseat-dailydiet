import React from 'react';
import { Container } from './styles';

type Props = {
  label: string;
};

const Label = ({ label }: Props) => {
  return <Container>{label}</Container>;
};

export default Label;
