import React from "react";
import styled from "styled-components/native";
import colors from "../../constants/colors";
import { perfectHeight, perfectWidth } from "../../services/commonFunctions";
import OptionButton from "./OptionButton";

const SwitchOptions = ({
  selectedOption,
  setSelectedOption,
  options,
  carouselIndex,
}) => {
  return (
    <WhiteContainer>
      {options.map((option, index) => (
        <OptionButton
          key={index}
          selected={selectedOption === option.name}
          img={option?.img}
          onPress={() => {
            setSelectedOption(option.name, carouselIndex);
          }}
        />
      ))}
    </WhiteContainer>
  );
};

export default SwitchOptions;

const WhiteContainer = styled.View`
  width: 90%;
  height: ${perfectHeight(6)}px;
  margin-top: ${perfectHeight(2)}px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${colors.white};
  align-self: center;
  border-radius: ${perfectWidth(2)}px;
`;
