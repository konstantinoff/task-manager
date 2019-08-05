import React from "react";
import styled from "styled-components";
// import { applyStyleModifiers } from "styled-components-modifiers";

const CardButton = ({ className, action }) => (
  <button className={className}>{action}</button>
);

export default styled(CardButton)`
  border: 0;
  padding: 0;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    opacity: 0.6;
  }
`;
