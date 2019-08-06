import React from "react";
import styled from "styled-components";
import CardButton from "./CardButton";
import { applyStyleModifiers } from "styled-components-modifiers";
import { setEditContext } from "../Card";

const CardControl = ({ className }) => {
  const { isEdit, setIsEdit } = React.useContext(setEditContext);
  return (
    <div className={className}>
      <CardButton onClick={() => setIsEdit(!isEdit)}>edit</CardButton>
      <CardButton>favorite</CardButton>
      <CardButton>archive</CardButton>
    </div>
  );
};

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
