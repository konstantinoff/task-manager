import React from "react";
import styled from "styled-components";

const CardText = ({ text, className }) => {
  return <span className={className}>{text}</span>;
};

export default styled(CardText)`
  height: 98px;
  width: 100%;
  outline: none;
  padding: 3px;
  font-weight: 500;
  font-family: monospace;
  font-size: 16px;
  overflow: auto;
  box-sizing: border-box;
  border-color: transparent;
`;
