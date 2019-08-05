import React, { useState } from "react";
import styled from "styled-components";
import CardView from "./CardView";
import CardEdit from "./CardEdit";
import stateExample from "../../../state";

const Card = ({ className, id }) => {
  const { data } = stateExample.cards[id];
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={className}>
      {isEdit ? (
        <CardEdit id={id} />
      ) : (
        <CardView setIsEdit={setIsEdit} id={id} />
      )}
    </div>
  );
};

export default styled(Card)`
  margin: 0 40px 26px 0;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;
