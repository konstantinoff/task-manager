import React, { useContext } from "react";
import styled from "styled-components";
import CardHashTag from "./CardHashTag";
import { StateContext } from "../../../../../../state";

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

const CardDetailsText = styled.span`
  margin-top: auto;
  font-size: 11px;
  font-weight: 500;
  width: 100px;
  outline: none;
  border: 0;
  text-transform: uppercase;
`;

const CardDetails = ({ id }) => {
  const { cards } = useContext(StateContext);
  const { hashtags, time, date } = cards[id];
  return (
    <CardDates>
      <CardDetailsText>{date}</CardDetailsText>
      <CardDetailsText>
        <b>{time}</b>
      </CardDetailsText>
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
