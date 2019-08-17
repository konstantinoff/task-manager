import React, { useContext } from "react";
import styled from "styled-components";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";
import { StateContext } from "../../../../../state";

const CardSettings = ({ className, id }) => {
  const { cards } = useContext(StateContext);
  const { image } = cards[id];
  return (
    <div className={className}>
      <CardDetails id={id} />
      {image && <CardImage image={image} />}
    </div>
  );
};

export default styled(CardSettings)`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
`;
