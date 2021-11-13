import React from "react";
import styled from "styled-components/native";
import colors from "../constants/colors";
import { perfectFont, perfectWidth } from "../services/commonFunctions";

const Typography = ({
  text,
  color = colors.white,
  size = 16,
  noLimit,
  maxChar = 50,
  isRequired,
  ...props
}) => {
  return (
    <Row>
      <Text size={perfectFont(size)} color={color} style={{ ...props }}>
        {noLimit
          ? text
          : text !== undefined &&
            (text.length >= maxChar ? text.slice(0, maxChar) + "..." : text)}
      </Text>
      {isRequired && (
        <Text
          size={perfectFont(20)}
          color={colors.normalTheme.negative}
          style={{ marginLeft: perfectWidth(1) }}
        >
          *
        </Text>
      )}
    </Row>
  );
};

export default Typography;

const Text = styled.Text`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: left;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`}
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;
