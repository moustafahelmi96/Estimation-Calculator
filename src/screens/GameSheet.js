import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import TableComponent from "../components/TableComponent";
import Typography from "../components/Typography";
import colors from "../constants/colors";
import { perfectHeight, perfectWidth } from "../services/commonFunctions";
import Button from "../components/Button";
import AddRound from "./AddRound";

const GameSheet = () => {
  const [playersNames, setPlayersNames] = useState();
  const [loader, setLoader] = useState(false);
  const [addRoundModal, setAddRoundModal] = useState(false);

  const getUserInformation = async () => {
    setLoader(true);
    AsyncStorage.getItem("playersName")
      .then((players) => {
        setPlayersNames(JSON.parse(players));
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  const roundsData = [
    {
      roundNumber: 0,
    },
    {
      roundNumber: 1,
      color: "spaid",
      firstPlayer: {
        isCall: true,
        score: 0,
        call: 4,
      },
      secondPlayer: {
        isCall: false,
        score: 0,
        call: 2,
      },
      thirdPlayer: {
        isCall: false,
        score: 0,
        call: 5,
      },
      forthPlayer: {
        isCall: false,
        score: 0,
        call: 1,
      },
    },
    {
      roundNumber: 2,
      color: "spaid",
      firstPlayer: {
        isCall: true,
        score: 0,
        call: 4,
      },
      secondPlayer: {
        isCall: false,
        score: 0,
        call: 2,
      },
      thirdPlayer: {
        isCall: false,
        score: 0,
        call: 5,
      },
      forthPlayer: {
        isCall: false,
        score: 0,
        call: 1,
      },
    },
  ];

  const toggleModal = () => {
    setAddRoundModal(!addRoundModal);
  };

  return (
    <MainContainer>
      <AddRound
        showModal={addRoundModal}
        toggleModal={toggleModal}
        playersNames={playersNames}
      />
      <SafeAreaView />
      {loader ? (
        <ActivityIndicator
          color={colors.orange}
          style={{ marginTop: perfectHeight(10), alignSelf: "center" }}
        />
      ) : (
        <TableContainer>
          <Typography
            text={"Estimation rounds"}
            fontWeight={"bold"}
            size={20}
            width={"100%"}
            textAlign={"center"}
            color={colors.white}
            marginTop={perfectHeight(2)}
            marginBottom={perfectHeight(2)}
          />
          <ScrollView>
            {roundsData.map((round, index) => {
              const lightTheme = index % 2 === 0;
              return (
                <TableComponent
                  key={index}
                  round={round}
                  playersInfo={playersNames}
                  lightTheme={lightTheme}
                  roundNumber={round.roundNumber}
                />
              );
            })}
          </ScrollView>
          <Button
            text={"add round"}
            onPress={() => {
              setAddRoundModal(!addRoundModal);
            }}
          />
        </TableContainer>
      )}
    </MainContainer>
  );
};

export default GameSheet;

const MainContainer = styled.View`
  width: ${perfectWidth(100)}px;
  height: ${perfectHeight(100)}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
`;

const TableContainer = styled.View`
  width: ${perfectWidth(100)}px;
  height: ${perfectHeight(100)}px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ScrollView = styled.ScrollView`
  width: ${perfectWidth(100)}px;
  max-height: 80%;
`;
