import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../../state";

const Colors = ["black", "yellow", "blue", "green", "pink"];

const CardColors = ({ id }) => {
  const { cards, setColor } = useContext(StateContext);
  const { color } = cards[id];
  return (
    <CardColorsInner>
      <CardColorsTitle>Color</CardColorsTitle>
      <CardColorsWrap>
        {Colors.map(item => (
          <CardColorButton
            onClick={() => setColor(id, item)}
            cardColor={item}
            active={item === color}
          />
        ))}
      </CardColorsWrap>
    </CardColorsInner>
  );
};

const CardColorsInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardColorsTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
`;

const CardColorsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CardColorButton = styled.button`
  display: flex;
  width: 15px;
  height: 15px;
  font-size: 0;
  cursor: pointer;
  border: none;
  outline: 0;
  background-color: ${({ cardColor }) => colorsCode[cardColor]};
  ${({ active, cardColor }) =>
    active &&
    `box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px ${colorsCode[cardColor]}`}
`;

const colorsCode = {
  black: "#0a0a0a",
  blue: "#0c5cdd",
  red: "#f11a1a",
  yellow: "#ffe125",
  pink: "#ff3cb9",
  green: "#31b55c"
};

export default CardColors;
