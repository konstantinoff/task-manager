import React from "react";
import styled from "styled-components";

const CardHashTag = ({ className, text }) => {
  return <span className={className}>{text}</span>;
};

export default styled(CardHashTag)`
  margin-right: 3px;
  font-size: 10px;
  border: 0;
  padding: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  &:before {
    content: "#";
  }
`;
