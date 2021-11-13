import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import Typography from "./Typography";
import { perfectHeight, perfectWidth } from "../services/commonFunctions";
import colors from "../constants/colors";

const Button = (props) => {
  const {
    width,
    height,
    backgroundColor,
    borderColor,
    onPress,
    textFont,
    textColor,
    text,
    loader = false,
    outline,
    disabled,
    size,
  } = props;
  return (
    <>
      <MainContainer
        width={width}
        height={height}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        onPress={onPress}
        disabled={disabled ? true : loader ? true : false}
        loader={loader}
        outline={outline}
        {...props}
      >
        {loader ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Typography
            color={textColor ? textColor : colors.white}
            text={text}
            fontFamily={textFont}
            size={size}
            textTransform={"uppercase"}
            textAlign={"center"}
          />
        )}
      </MainContainer>
    </>
  );
};

export default Button;

const MainContainer = styled.TouchableOpacity`
  width: ${(p) => (p.width ? perfectWidth(p.width) : perfectWidth(80))}px;
  height: ${(p) => (p.height ? perfectHeight(p.height) : perfectHeight(5))}px;
  background-color: ${(p) =>
    p.loader
      ? colors.grey
      : p.outline
      ? "transparent"
      : p.backgroundColor
      ? p.backgroundColor
      : p.disabled
      ? colors.grey
      : colors.orange};
  align-self: ${(p) => (p.alignSelf ? p.alignSelf : "center")};
  justify-content: center;
  align-items: center;
  border-radius: ${perfectWidth(2)}px;
  border-color: ${(p) => (p.borderColor ? p.borderColor : colors.secondary)};
  border-width: ${(p) => (p.outline ? perfectWidth(0.2) : perfectWidth(0))}px;
`;
