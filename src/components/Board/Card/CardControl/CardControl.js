import React from "react";
import styled from "styled-components";
import CardButton from "./CardButton";

const CardControl = ({ className }) => (
  <div className={className}>
    <CardButton action="edit" />
    <CardButton action="archive" />
    <CardButton action="favorites" />
  </div>
);

export default styled(CardControl)`
  display: flex;
  opacity: 0;
  justify-content: space-between;
  margin-bottom: 8px;
  transition: opacity 0.3s ease-out;
`;
