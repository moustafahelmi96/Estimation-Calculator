import React, { useEffect } from "react";
import styled from "styled-components/native";
import colors from "../constants/colors";
import Typography from "../components/Typography";
import { perfectHeight, perfectWidth } from "../services/commonFunctions";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const PlayersInformation = () => {
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const savePlayers = (values) => {
    AsyncStorage.setItem("playersName", JSON.stringify(values));
    navigation.navigate("gameSheet");
  };

  useEffect(() => {
    register("firstPlayer", {
      required: "please insert this field",
    });
    register("secondPlayer", {
      required: "please insert this field",
    });
    register("thirdPlayer", {
      required: "please insert this field",
    });
    register("forthPlayer", {
      required: "please insert this field",
    });
  }, []);

  useEffect(() => {
    setValue("firstPlayer", "moustafa");
    setValue("secondPlayer", "ossama");
    setValue("thirdPlayer", "wael");
    setValue("forthPlayer", "mohab");
  }, []);

  return (
    <MainContainer>
      <KeyboardAwareScrollView>
        <Container>
          <Typography
            text={"Players information"}
            color={colors.white}
            size={22}
          />
          <CustomInput
            title={"Player 1"}
            placeholder={"Player 1"}
            errorMessage={errors.firstPlayer?.message}
            onChangeText={(name) => {
              setValue("firstPlayer", name);
            }}
          />
          <CustomInput
            title={"Player 2"}
            placeholder={"Player 2"}
            errorMessage={errors.firstPlayer?.message}
            onChangeText={(name) => {
              setValue("secondPlayer", name);
            }}
          />
          <CustomInput
            title={"Player 3"}
            placeholder={"Player 3"}
            errorMessage={errors.firstPlayer?.message}
            onChangeText={(name) => {
              setValue("thirdPlayer", name);
            }}
          />
          <CustomInput
            title={"Player 4"}
            placeholder={"Player 4"}
            errorMessage={errors.firstPlayer?.message}
            onChangeText={(name) => {
              setValue("forthPlayer", name);
            }}
          />
          <Button text={"Let's start"} onPress={handleSubmit(savePlayers)} />
        </Container>
      </KeyboardAwareScrollView>
    </MainContainer>
  );
};

export default PlayersInformation;

const MainContainer = styled.View`
  width: ${perfectWidth(100)}px;
  height: ${perfectHeight(100)}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
`;

const Container = styled.View`
  width: ${perfectWidth(90)}px;
  height: ${perfectHeight(90)}px;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
`;

const Row = styled.View`
  width: ${perfectWidth(90)}px;
  height: ${perfectHeight(7)}px;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  width: ${perfectWidth(65)}px;
  height: ${perfectHeight(5)}px;
  background-color: ${colors.white};
  border-radius: ${perfectWidth(2)}px;
  padding-left: 5px;
`;

const SafeArea = styled.SafeAreaView``;
