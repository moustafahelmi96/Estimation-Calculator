import React, { FC, useContext, useState } from "react";
import { I18nManager } from "react-native";
import styled from "styled-components/native";
import colors from "../constants/colors";
import { perfectWidth, perfectHeight } from "../services/commonFunctions";
import Typography from "./Typography";

const CustomInput = (props) => {
  const {
    title,
    placeholder,
    errorMessage,
    required,
    greyedOut,
    width,
    isPassword,
  } = props;

  return (
    <>
      <MainContainer width={width}>
        <Typography
          text={title}
          color={colors.white}
          marginLeft={perfectWidth(3)}
          size={16}
          isRequired={required}
        />
        <Container greyedOut={greyedOut}>
          <Input
            placeholder={placeholder}
            {...props}
            placeholderTextColor={colors.placeholder}
          />
        </Container>
        {errorMessage && (
          <Typography
            text={errorMessage}
            size={12}
            fontFamily={fonts.bold}
            color={colors.negative}
            marginTop={perfectHeight(0.5)}
            marginLeft={perfectWidth(3)}
            width={perfectWidth(86)}
            alignSelf={"flex-start"}
          />
        )}
      </MainContainer>
    </>
  );
};

export default CustomInput;

const MainContainer = styled.View`
  width: ${(p) => (p.width ? `${p.width}%` : "100%")};
  height: ${perfectHeight(10)}px;
  justify-content: space-between;
  box-shadow: ${perfectWidth(0)}px ${perfectWidth(0)}px ${perfectWidth(0.5)}px
    ${(p) => colors.grey};
`;

const Container = styled.View`
  width: 100%;
  height: ${perfectHeight(6)}px;
  justify-content: space-evenly;
  border-radius: ${perfectWidth(1)}px;
  background-color: ${(p) => (p.greyedOut ? colors.grey : colors.white)};
`;

const Input = styled.TextInput`
  width: 90%;
  height: 100%;
  align-self: center;
  text-align: ${I18nManager.isRTL ? "right" : "left"};
`;
