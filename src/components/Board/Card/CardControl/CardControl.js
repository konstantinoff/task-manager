import React from "react";
import styled from "styled-components";
import CardButton from "./CardButton";
import { applyStyleModifiers } from "styled-components-modifiers";

const CardControl = ({ className, setIsEdit }) => (
  <div className={className}>
    <CardButton onClick={() => setIsEdit(true)}>edit</CardButton>
    <CardButton>favorite</CardButton>
    <CardButton>archive</CardButton>
  </div>
);

export default styled(CardControl)`
  display: flex;
  opacity: 0;
  justify-content: space-between;
  margin-bottom: 8px;
  transition: opacity 0.3s ease-out;
  ${applyStyleModifiers({
    edit: () => `
    opacity: 1;
    `
  })}
`;
