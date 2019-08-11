import React, { useContext } from "react";
import styled from "styled-components";
import CardButton from "./CardButton";
import { applyStyleModifiers } from "styled-components-modifiers";
import { StateContext } from "../../../../state";

const CardControl = ({ className, id }) => {
  const { changeEdit, editingCard } = useContext(StateContext);
  const isOpen = editingCard === id ? null : id;
  return (
    <div className={className}>
      <CardButton onClick={() => changeEdit(isOpen)}>edit</CardButton>
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
