import { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

import {
  Container,
  FormContainer,
  MainContainer,
  OptionsContainer,
  Option,
} from "./styles";

import Nav from "@components/Nav";
import Label from "@components/Label";
import Input from "@components/Input";
import Select from "@components/Select";
import Button from "@components/Button";

type FormDataProps = {
  title: string | undefined
  description: string | undefined
  date: string | undefined
  hour: string | undefined
  onDiet: boolean | undefined
}

const New = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [selected, setSelected] = useState({
    YES: false,
    NO: false,
  });

  const handleSelectClick = (option: string) => {
    if (option === "YES") {
      setSelected({
        YES: true,
        NO: false,
      });
      setValue("onDiet", true);
    } else {
      setSelected({
        YES: false,
        NO: true,
      });
      setValue("onDiet", false);
    }
  };

  useEffect(() => {
    register("title");
    register("description");
    register("date");
    register("hour");
    register("onDiet");
  }, [register]);

  const handleRegisterMeal = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Nav title="Nova Refeição" />

      <MainContainer>
        <FormContainer>
          <Label label="Nome" />
          <Input onChangeText={(text) => setValue("title", text)} />
          <Label label="Descrição" />
          <Input
            style={{ textAlignVertical: "top", minHeight: 120, maxHeight: 120 }}
            multiline={true}
            onChangeText={(text) => setValue("description", text)}
          />
          <OptionsContainer style={{marginBottom: 48}}>
            <Option>
              <Label label="Data" />
              <Input onChangeText={(text) => setValue("date", text)} />
            </Option>
            <Option>
              <Label label="Hora" />
              <Input onChangeText={(text) => setValue("hour", text)} />
            </Option>
          </OptionsContainer>
          <Label label="Está dentro da dieta?" />
          <OptionsContainer >
            <Select
              label="Sim"
              type="YES"
              selected={selected.YES}
              onPress={() => handleSelectClick("YES")}
            />
            <Select
              label="Não"
              type="NO"
              selected={selected.NO}
              onPress={() => handleSelectClick("NO")}
            />
          </OptionsContainer>
        </FormContainer>
        <Button
          type="PRIMARY"
          label="Cadastrar Refeição"
          onPress={handleSubmit(handleRegisterMeal)}
        />
      </MainContainer>
    </Container>
  );
};

export default New;
