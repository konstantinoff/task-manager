import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { StateContext } from "../../../../../../state";

const CardDetails = ({ id }) => {
  const { cards } = useContext(StateContext);
  const { hashtags, time, date } = cards[id];
  const formattedDate = date ? moment.unix(date).format("D MMMM") : null;
  const formattedTime = time ? moment.unix(time).format("LT") : null;
  return (
    <CardDates>
      <CardDetailsText>{formattedDate}</CardDetailsText>
      <CardDetailsText>
        <b>{formattedTime}</b>
      </CardDetailsText>
      <CardHashList>
        {Array.from(hashtags).map(([color, text], index) => {
          return <CardHashTag key={index.toString()}>{text}</CardHashTag>;
        })}
      </CardHashList>
    </CardDates>
  );
};

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

const CardHashTag = styled.span`
  margin-right: 3px;
  font-size: 10px;
  border: 0;
  padding: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  &:before {
    content: "#";
  }
`;

export default CardDetails;
