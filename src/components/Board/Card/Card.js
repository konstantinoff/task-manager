import React, { useContext } from "react";
import styled from "styled-components";
import CardView from "./CardView";
import CardEdit from "./CardEdit";
import { StateContext } from "../../../state";

const Card = ({ className, id }) => {
  const { editingCard } = useContext(StateContext);
  return (
    <div className={className}>
      {editingCard === id ? <CardEdit id={id} /> : <CardView id={id} />}
    </div>
  );
};

export default styled(Card)`
  margin: 0 40px 26px 0;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;
