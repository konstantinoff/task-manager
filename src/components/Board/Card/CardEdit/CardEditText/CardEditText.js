import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../../state";

const CardEditText = ({ className, id }) => {
  const { cards, setText } = useContext(StateContext);
  const { text } = cards[id];
  return (
    <textarea
      onChange={e => {
        setText(id, e.target.value);
      }}
      className={className}
      defaultValue={text}
    />
  );
};

export default styled(CardEditText)`
  resize: none;
  height: 98px;
  width: 100%;
  outline: none;
  padding: 3px;
  font-family: monospace;
  font-weight: 500;
  font-size: 16px;
  overflow: auto;
  box-sizing: border-box;
  border-color: transparent;
  &:focus {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;
