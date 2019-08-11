import React, { useContext } from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { StateContext } from "../../../../../state";

import {
  CardEditButton,
  CardEditWrapper
} from "../CardEditDates/CardEditDates";

const days = ["mo", "tu", "we", "th", "fr", "sa", "su"];

const CardEditRepeat = ({ id }) => {
  const { cards, isDayEditToggler, editDayToggler } = useContext(StateContext);
  const { isDaysEdit, repeated } = cards[id];
  return (
    <>
      <CardEditWrapper>
        <CardEditButton onClick={() => isDayEditToggler(id)}>
          Repeat: {isDaysEdit ? "yes" : "no"}
        </CardEditButton>
        {isDaysEdit && (
          <RepeatDaysInner>
            {days.map(item => (
              <RepeatDay
                key={item}
                onClick={() => editDayToggler(id, item)}
                modifiers={repeated.has(item) && "picked"}
              >
                {item}
              </RepeatDay>
            ))}
          </RepeatDaysInner>
        )}
      </CardEditWrapper>
    </>
  );
};

const RepeatDaysInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3px;
  padding-bottom: 5px;
  border-bottom: 2px solid #000000;
`;

const RepeatDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border: 1px solid #e3dede;
  color: #e3dede;
  cursor: pointer;

  ${applyStyleModifiers({
    picked: () => `
    color: #000000;
    border-color: #000000;
    `
  })}
`;

export default CardEditRepeat;
