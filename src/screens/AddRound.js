import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { perfectHeight, perfectWidth } from "../services/commonFunctions";
import colors from "../constants/colors";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView, Switch } from "react-native";
import CustomInput from "../components/CustomInput";
import Typography from "../components/Typography";

const AddRound = ({ showModal, toggleModal, playersNames }) => {
  const [roundDefaultValues, setRoundDefaultValues] = useState([
    {
      key: 1,
      playerName: playersNames?.firstPlayer,
      isCall: false,
      call: 0,
      isWith: false,
    },
    {
      key: 2,
      playerName: playersNames?.secondPlayer,
      isCall: false,
      call: 0,
      isWith: false,
    },
    {
      key: 3,
      playerName: playersNames?.thirdPlayer,
      isCall: false,
      call: 0,
      isWith: false,
    },
    {
      key: 4,
      playerName: playersNames?.forthPlayer,
      isCall: false,
      call: 0,
      isWith: false,
    },
  ]);

  useEffect(() => {
    console.log("round", roundDefaultValues);
  }, [roundDefaultValues]);

  const playerCallComponent = ({ item, index }) => {
    return (
      <ModalBase>
        <MainContainer>
          <Typography
            text={item?.playerName}
            size={22}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          />
          <CustomInput
            width={"90%"}
            title={"Number of tricks"}
            placeholder={"Ex:4"}
            keyboardType={"number-pad"}
            returnKeyType={"done"}
            onChangeText={(number) => {
              console.log("number", number);
            }}
          />
          <Row>
            <Typography text={"Call"} size={22} />
            <Switch
              trackColor={{ false: "#767577", true: colors.orange }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(value) => {
                let round = JSON.parse(JSON.stringify(roundDefaultValues));
                round[index].isCall = value;
                setRoundDefaultValues(round);
              }}
              value={item.isCall}
            />
          </Row>
          {item.isCall && (
            <WhiteContainer>
              <CallButton img={require("../../assets/images/spade.png")} />
              <CallButton img={require("../../assets/images/heart.png")} />
              <CallButton img={require("../../assets/images/diamond.png")} />
              <CallButton img={require("../../assets/images/clubs.png")} />
            </WhiteContainer>
          )}
          <Row>
            <Typography text={"With"} size={22} />
            <Switch
              trackColor={{ false: "#767577", true: colors.orange }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(value) => {
                let round = JSON.parse(JSON.stringify(roundDefaultValues));
                round[index].isWith = value;
                setRoundDefaultValues(round);
              }}
              value={item.isWith}
            />
          </Row>
        </MainContainer>
      </ModalBase>
    );
  };
  return (
    <ModalView
      isVisible={showModal}
      onBackdropPress={toggleModal}
      useNativeDriver
    >
      <SafeAreaView />
      <Carousel
        data={roundDefaultValues}
        renderItem={playerCallComponent}
        sliderWidth={perfectWidth(100)}
        itemWidth={perfectWidth(90)}
      />
    </ModalView>
  );
};

export default AddRound;

const CallButton = (props) => {
  const { img } = props;
  return (
    <ImageButton {...props}>
      <ImageComponent resizeMode={"contain"} source={img} />
    </ImageButton>
  );
};

const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const ModalView = styled(Modal)`
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ModalBase = styled.View`
  width: ${perfectWidth(95)}px;
  height: 90%;
  border-radius: ${perfectWidth(5)}px;
  align-self: center;
  background-color: ${(p) => colors.lightBlack};
  justify-content: center;
  align-items: center;
`;

const WhiteContainer = styled.View`
  width: 90%;
  height: ${perfectHeight(6)}px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${colors.white};
  align-self: center;
  border-radius: ${perfectWidth(2)}px;
`;

const ImageComponent = styled.Image`
  width: ${perfectWidth(10)}px;
  height: ${perfectHeight(4)}px;
  align-items: center;
  justify-content: center;
`;

const ImageButton = styled.TouchableOpacity`
  width: ${perfectWidth(10)}px;
  height: ${perfectHeight(5)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${perfectWidth(2)}px;
  border-color: ${({ selected }) => (selected ? selected : colors.darkGrey)};
  border-width: 2px;
`;
