import React from "react";
import styled from "styled-components";

const MenuButton = styled.button`
  font-size: 16px;
  display: inline-flex;
  font-weight: normal;
  color: inherit;
  border: none;
  text-transform: uppercase;
  background-color: inherit;
  text-decoration: none;
  margin-left: 54px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-out;
  }
`;

export default MenuButton;
