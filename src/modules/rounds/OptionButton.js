import React from "react";
import styled from "styled-components/native";
import colors from "../../constants/colors";
import { perfectHeight, perfectWidth } from "../../services/commonFunctions";

const OptionButton = (props) => {
  const { img, selected } = props;
  return (
    <ImageButton selected={selected} {...props}>
      <ImageComponent resizeMode={"contain"} source={img} />
    </ImageButton>
  );
};

export default OptionButton;

const ImageButton = styled.TouchableOpacity`
  width: ${perfectWidth(12)}px;
  height: ${perfectHeight(5)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${perfectWidth(2)}px;
  border-color: ${({ selected }) =>
    selected ? colors.orange : colors.darkGrey};
  border-width: 3px;
`;

const ImageComponent = styled.Image`
  width: ${perfectWidth(10)}px;
  height: ${perfectHeight(4)}px;
  align-items: center;
  justify-content: center;
`;
