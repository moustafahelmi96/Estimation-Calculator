/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import colors from "../constants/colors";
import { perfectHeight, perfectWidth } from "../services/commonFunctions";
import Typography from "./Typography";
import { SafeAreaView } from "react-native";

const TableComponent = ({ playersInfo, roundNumber, round, lightTheme }) => {
  const identification = roundNumber === 0;
  console.log("round", round);
  return (
    <MainContainer>
      <SafeAreaView />
      <Row backgroundColor={lightTheme ? colors.white : colors.darkGrey}>
        <RoundNumberContainer>
          <Typography
            text={identification ? "#" : roundNumber}
            color={lightTheme ? colors.black : colors.white}
          />
        </RoundNumberContainer>
        <NameContainer identification={identification}>
          <ScoreContainer>
            <Typography
              text={
                identification
                  ? playersInfo?.firstPlayer
                  : round.firstPlayer.score
              }
              color={lightTheme ? colors.black : colors.white}
              maxChar={5}
            />
          </ScoreContainer>
          <CallComponent
            identification={identification}
            call={round?.firstPlayer?.call}
            isCall={round?.firstPlayer?.isCall}
          />
        </NameContainer>
        <NameContainer identification={identification}>
          <ScoreContainer>
            <Typography
              text={
                identification
                  ? playersInfo?.secondPlayer
                  : round.secondPlayer.score
              }
              color={lightTheme ? colors.black : colors.white}
              maxChar={5}
            />
          </ScoreContainer>
          <CallComponent
            identification={identification}
            call={round?.secondPlayer?.call}
            isCall={round?.secondPlayer?.isCall}
          />
        </NameContainer>
        <NameContainer identification={identification}>
          <ScoreContainer>
            <Typography
              text={
                identification
                  ? playersInfo?.thirdPlayer
                  : round.thirdPlayer.score
              }
              color={lightTheme ? colors.black : colors.white}
              maxChar={5}
            />
          </ScoreContainer>
          <CallComponent
            identification={identification}
            call={round?.thirdPlayer?.call}
            isCall={round?.thirdPlayer?.isCall}
          />
        </NameContainer>
        <NameContainer identification={identification}>
          <ScoreContainer>
            <Typography
              text={
                identification
                  ? playersInfo?.forthPlayer
                  : round.forthPlayer.score
              }
              color={lightTheme ? colors.black : colors.white}
              maxChar={5}
            />
          </ScoreContainer>
          <CallComponent
            identification={identification}
            call={round?.forthPlayer?.call}
            isCall={round?.forthPlayer?.isCall}
          />
        </NameContainer>
      </Row>
    </MainContainer>
  );
};
export default TableComponent;

const CallComponent = ({ call, identification, isCall }) => {
  return (
    !identification && (
      <CallContainer>
        <Typography
          text={call}
          fontWeight={"bold"}
          size={14}
          maxChar={5}
          color={colors.black}
        />
        {isCall && (
          <Typography
            text={"C"}
            fontWeight={"bold"}
            maxChar={5}
            color={colors.negative}
          />
        )}
      </CallContainer>
    )
  );
};

const MainContainer = styled.View`
  width: ${perfectWidth(100)}px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Row = styled.View`
  width: 100%;
  height: ${perfectHeight(5)}px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(p) =>
    p.backgroundColor ? p.backgroundColor : colors.darkGrey};
`;

const RoundNumberContainer = styled.View`
  width: ${perfectWidth(10)}px;
  height: ${perfectHeight(4)}px;
  align-items: center;
  justify-content: center;
`;

const NameContainer = styled.View`
  width: ${perfectWidth(22.5)}px;
  height: ${perfectHeight(4)}px;
  align-items: center;
  justify-content: center;
  border-left-width: 1px;
  border-color: ${colors.lightGrey};
  flex-direction: row;
  justify-content: ${(p) => (p.identification ? "center" : "space-between")};
`;

const CallContainer = styled.View`
  width: 35%;
  height: ${perfectHeight(3)}px;
  border-radius: ${perfectWidth(1)}px;
  margin-right: 5px;
  margin-top: 15%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.orange};
`;

const ScoreContainer = styled.View`
  width: 55%;
  height: ${perfectHeight(4)}px;
  align-items: center;
  justify-content: center;
`;
