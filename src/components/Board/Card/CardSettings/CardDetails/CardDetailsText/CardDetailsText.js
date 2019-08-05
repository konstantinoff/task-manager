import React from "react";
import styled from "styled-components";

const CardDeadLineText = ({ className, text }) => {
  return <span className={className}>{text}</span>;
};

export default styled(CardDeadLineText)`
  font-size: 11px;
  font-weight: 500;
  width: 100px;
  outline: none;
  border: 0;
  text-transform: uppercase;
`;
