import { useForm } from 'react-hook-form';

import {
  Container,
  FormContainer,
  MainContainer,
  OptionsContainer,
  Option,
} from './styles';

import Nav from '@components/Nav';
import Input from '@components/Input';
import Button from '@components/Button';
import Label from '@components/Label';
import { useEffect } from 'react';

const New = () => {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('title');
    register('description');
    register('date');
    register('hour');
    register('onDiet');
  }, [register]);

  const handleRegisterMeal = (formData) => {
    console.log(formData);
  };

  return (
    <Container>
      <Nav title='Nova Refeição' />

      <MainContainer>
        <FormContainer>
          <Label label='Nome' />
          <Input onChangeText={(text) => setValue('name', text)} />
          <Label label='Descrição' />
          <Input
            style={{ textAlignVertical: 'top', minHeight: 120, maxHeight: 120 }}
            multiline={true}
            onChangeText={(text) => setValue('description', text)}
          />
          <OptionsContainer>
            <Option>
              <Label label='Data' />
              <Input onChangeText={(text) => setValue('date', text)} />
            </Option>
            <Option>
              <Label label='Hora' />
              <Input onChangeText={(text) => setValue('hour', text)} />
            </Option>
          </OptionsContainer>
          <Label label='Está dentro da dieta?' />
          <OptionsContainer></OptionsContainer>
        </FormContainer>
        <Button
          type='PRIMARY'
          label='Cadastrar Refeição'
          onPress={handleSubmit(handleRegisterMeal)}
        />
      </MainContainer>
    </Container>
  );
};

export default New;
