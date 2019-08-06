import React from "react";
import styled from "styled-components";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";

const CardSettings = ({ className, id }) => {
  return (
    <div className={className}>
      <CardDetails id={id} />
      <CardImage />
    </div>
  );
};

export default styled(CardSettings)`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
`;
