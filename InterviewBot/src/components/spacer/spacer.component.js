import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}: ${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ size, position, direction, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  const flexDirectionStyle =
    direction === "row" ? { flexDirection: "row" } : {};

  return (
    <SpacerView variant={variant} style={flexDirectionStyle}>
      {children}
    </SpacerView>
  );
};
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
