import React from "react";
import styled from "styled-components";
import CardControl from "../CardControl/CardControl";
import { applyStyleModifiers } from "styled-components-modifiers";

const CardInner = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(CardInner)`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 7px 15px;
  box-sizing: border-box;
  box-shadow: 0 9px 38px 0 rgba(0, 17, 45, 0.12);
  background-color: #ffffff;
  outline: 0;
  &:hover {
    outline: 10px solid white;
    transition: outline-width 0.2s ease-in-out;
    box-shadow: 0 -14px 38px 0 rgba(35, 113, 245, 0.07),
      0 14px 38px 0 rgba(35, 113, 245, 0.07);
    z-index: 1;
  }
  &:hover ${CardControl} {
    opacity: 1;
  }
  ${applyStyleModifiers({
    edit: () => `
    bottom: auto;
    z-index: 2;
    min-height: 450px;
    border: 1px solid #000000;
    padding-bottom: 15px;
    `
  })}
`;
