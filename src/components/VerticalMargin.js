import React from "react";
import styled from "styled-components/native";
import { perfectHeight } from "../services/commonFunctions";

const VerticalMargin = ({ height }) => {
  return <MainContainer height={height} />;
};

export default VerticalMargin;

const MainContainer = styled.View`
  height: ${(p) => perfectHeight(p.height)}px;
  align-self: center;
`;
