import React from "react";
import styled from "styled-components";
import CardDetailsText from "./CardDetailsText";
import CardHashTag from "./CardHashTag";

const CardDates = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const CardHashList = styled.div`
  list-style: none;
  margin: 5px 0 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  max-height: 30px;
  overflow: auto;
`;

const CardDetails = () => {
  return (
    <CardDates>
      <CardDetailsText text="23 September" />
      <CardDetailsText text="11:15 PM" />
      <CardHashList>
        <CardHashTag text="repeat" />
        <CardHashTag text="cinema" />
        <CardHashTag text="entertainment" />
      </CardHashList>
    </CardDates>
  );
};

export default styled(CardDetails)`
  display: flex;
  flex-direction: column;
`;
