import React, { useContext } from "react";
import styled from "styled-components";
import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardText from "./CardText";
import CardSettings from "./CardSettings";
import appContext from "../../../../state";

const CardView = ({ className, id }) => {
  const { state } = useContext(appContext);
  const { color, text, repeat } = state.cards[id];
  return (
    <article className={className}>
      <CardInner>
        <CardControl />
        <CardColorBar modifiers={[color, repeat]} />
        <CardText text={text} />
        <CardSettings />
      </CardInner>
    </article>
  );
};

export default styled(CardView)`
  position: relative;
  width: 210px;
  height: 210px;
`;
