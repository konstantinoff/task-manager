import React, { useContext } from "react";
import styled from "styled-components";
import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardText from "./CardText";
import CardSettings from "./CardSettings";
import { StateContext } from "../../../../state";

const CardView = ({ className, id }) => {
  const { cards } = useContext(StateContext);
  const { text, color, repeat } = cards[id];
  return (
    <article className={className}>
      <CardInner>
        <CardControl id={id} />
        <CardColorBar modifiers={[color, repeat]} />
        <CardText text={text} />
        <CardSettings id={id} />
      </CardInner>
    </article>
  );
};

export default styled(CardView)`
  position: relative;
  width: 210px;
  height: 210px;
`;
