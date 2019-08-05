import React from "react";
import styled from "styled-components";

const CardEditText = ({ className }) => {
  return (
    <textarea
      className={className}
      defaultValue="It is example of repeating task. It marks by wave."
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
