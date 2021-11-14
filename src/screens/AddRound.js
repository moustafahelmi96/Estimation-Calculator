import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { perfectHeight, perfectWidth } from "../services/commonFunctions";
import colors from "../constants/colors";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView, Switch, View } from "react-native";
import CustomInput from "../components/CustomInput";
import Typography from "../components/Typography";
import SwitchOptions from "../modules/rounds/SwitchOptions";
import Button from "../components/Button";
import { sum } from "ramda";

const AddRound = ({ showModal, toggleModal, playersNames }) => {
  const [roundDefaultValues, setRoundDefaultValues] = useState();
  const [roundErrors, setRoundErrors] = useState("");

  const setRisk = (value, roundIndex) => {
    let round = JSON.parse(JSON.stringify(roundDefaultValues));
    round[roundIndex].riskValue = value;
    setRoundDefaultValues(round);
  };

  const setCallColor = (value, roundIndex) => {
    let round = JSON.parse(JSON.stringify(roundDefaultValues));
    round[roundIndex].callColor = value;
    setRoundDefaultValues(round);
  };

  const save = () => {
    let localCalls = [];
    console.log("inside save", roundDefaultValues);
    roundDefaultValues.map((value) => {
      localCalls.push(value.call);
    });
    // check if there is more than 1 call

    // check if the sum of calls is equal to 13
    const successCallChecker = sum(localCalls) !== 13;
    if (!successCallChecker) {
      setRoundErrors("sum of tricks cant be equals 13");
    }
    console.log("callChecker", successCallChecker);
    // check if there is more than 1 risk
  };

  function add(accumulator, a) {
    return accumulator + a;
  }

  useEffect(() => {
    setRoundDefaultValues([
      {
        key: 1,
        playerName: playersNames?.firstPlayer,
        isCall: false,
        call: 0,
        isWith: false,
        isRisk: false,
        riskValue: "",
        callColor: "",
      },
      {
        key: 2,
        playerName: playersNames?.secondPlayer,
        isCall: false,
        call: 0,
        isWith: false,
        isRisk: false,
        riskValue: "",
        callColor: "",
      },
      {
        key: 3,
        playerName: playersNames?.thirdPlayer,
        isCall: false,
        call: 0,
        isWith: false,
        isRisk: false,
        riskValue: "",
        callColor: "",
      },
      {
        key: 4,
        playerName: playersNames?.forthPlayer,
        isCall: false,
        call: 0,
        isWith: false,
        isRisk: false,
        riskValue: "",
        callColor: "",
      },
    ]);
  }, [playersNames]);

  const playerCallComponent = ({ item, index }) => {
    const lastPlayer = index === 3;
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
              let round = JSON.parse(JSON.stringify(roundDefaultValues));
              round[index].call = Number(number);
              setRoundDefaultValues(round);
            }}
          />
          <Group>
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
              <SwitchOptions
                options={[
                  {
                    img: require("../../assets/images/spade.png"),
                    name: "spade",
                  },
                  {
                    img: require("../../assets/images/heart.png"),
                    name: "heart",
                  },
                  {
                    img: require("../../assets/images/diamond.png"),
                    name: "diamond",
                  },
                  {
                    img: require("../../assets/images/clubs.png"),
                    name: "club",
                  },
                ]}
                setSelectedOption={setCallColor}
                selectedOption={item.callColor}
                carouselIndex={index}
              />
            )}
          </Group>
          {!item.isCall && (
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
          )}
          <Group>
            <Row>
              <Typography text={"Risk"} size={22} />
              <Switch
                trackColor={{ false: "#767577", true: colors.orange }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                  let round = JSON.parse(JSON.stringify(roundDefaultValues));
                  round[index].isRisk = value;
                  setRoundDefaultValues(round);
                }}
                value={item.isRisk}
              />
            </Row>
            {item.isRisk && (
              <SwitchOptions
                options={[
                  {
                    img: require("../../assets/images/0.png"),
                    name: "noRisk",
                  },
                  {
                    img: require("../../assets/images/1.png"),
                    name: "risk",
                  },
                  {
                    img: require("../../assets/images/2.png"),
                    name: "doubleRisk",
                  },
                  {
                    img: require("../../assets/images/3.png"),
                    name: "tripleRisk",
                  },
                ]}
                setSelectedOption={setRisk}
                selectedOption={item?.riskValue}
                carouselIndex={index}
              />
            )}
          </Group>
          <Button
            text={lastPlayer ? "start round" : "close"}
            onPress={() => {
              lastPlayer ? save() : toggleModal();
            }}
            backgroundColor={lastPlayer ? colors.orange : colors.negative}
          />
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

const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Group = styled.View`
  width: 100%;
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
  border-color: ${({ selected }) =>
    selected ? colors.orange : colors.darkGrey};
  border-width: 3px;
`;
