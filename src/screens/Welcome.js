import React, { useState } from "react";
import styled from "styled-components/native";
import { perfectHeight, perfectWidth } from "../services/commonFunctions";
import Typography from "../components/Typography";
import colors from "../constants/colors";
import GestureRecognizer from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";
import VerticalMargin from "../components/VerticalMargin";
import { View } from "react-native";

const Welcome = () => {
  const navigation = useNavigation();

  const onSwipeLeft = () => {
    navigation.navigate("playersInformation");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeLeft={() => onSwipeLeft()}
      config={config}
      style={{
        flex: 1,
      }}
    >
      <MainContainer>
        <BaseContainer>
          <VerticalMargin height={10} />
          <View>
            <Typography text={"Welcome to"} size={28} fontWeight={"bold"} />
            <Typography
              text={"Estimation Calculator"}
              size={28}
              fontWeight={"bold"}
            />
          </View>
          <Typography text={"Swipe left to continue"} size={14} />
        </BaseContainer>
      </MainContainer>
    </GestureRecognizer>
  );
};

export default Welcome;

const MainContainer = styled.View`
  height: 100%;
  justify-content: space-between;
  background-color: green;
  align-items: center;
  background-color: ${colors.black};
`;

const BaseContainer = styled.View`
  width: 100%;
  height: 95%;
  justify-content: space-between;
  background-color: green;
  align-items: center;
  background-color: ${colors.black};
`;

const SafeArea = styled.SafeAreaView`
  background-color: green;
`;
