import React, { useContext } from "react";
import styled from "styled-components";
import CardDetailsText from "./CardDetailsText";
import CardHashTag from "./CardHashTag";
import appContext from "../../../../../../state";

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

const CardDetails = ({ id }) => {
  const { state } = useContext(appContext);
  const { hashtags } = state.cards[id];
  return (
    <CardDates>
      <CardDetailsText text="23 September" />
      <CardDetailsText text="11:15 PM" />
      <CardHashList>
        {hashtags.map((item, index) => {
          return <CardHashTag key={index.toString()} text={item} />;
        })}
      </CardHashList>
    </CardDates>
  );
};

export default styled(CardDetails)`
  display: flex;
  flex-direction: column;
`;
