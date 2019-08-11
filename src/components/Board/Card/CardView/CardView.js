import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../state";

import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardSettings from "./CardSettings";

const CardView = ({ className, id }) => {
  const { cards } = useContext(StateContext);
  const { text, color, repeated } = cards[id];
  const isRepeated = repeated.size ? "repeat" : null;

  return (
    <article className={className}>
      <CardInner>
        <CardControl id={id} />
        <CardColorBar modifiers={[color, isRepeated]} />
        <CardText>{text}</CardText>
        <CardSettings id={id} />
      </CardInner>
    </article>
  );
};

const CardText = styled.span`
  height: 98px;
  width: 100%;
  outline: none;
  padding: 3px;
  font-weight: 500;
  font-family: monospace;
  font-size: 16px;
  overflow-wrap: break-word;
  box-sizing: border-box;
  border-color: transparent;
`;

export default styled(CardView)`
  position: relative;
  width: 210px;
  height: 210px;
`;
