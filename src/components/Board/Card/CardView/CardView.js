import React from "react";
import styled from "styled-components";
import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardText from "./CardText";
import CardSettings from "./CardSettings";
import stateExample from "../../../../state";

const CardView = ({ className, id, setIsEdit }) => {
  const data = stateExample.cards[id];
  return (
    <article className={className}>
      <CardInner>
        <CardControl setIsEdit={setIsEdit} />
        <CardColorBar modifiers={["yellow", "repeat"]} />
        <CardText text="It is example of repeating task. It marks by wave" />
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
