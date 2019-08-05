import React from "react";
import styled from "styled-components";
// import { applyStyleModifiers } from "styled-components-modifiers";

const Button = styled.button`
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

export default Button;
