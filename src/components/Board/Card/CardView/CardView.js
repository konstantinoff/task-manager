import React from "react";
import styled from "styled-components";
import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardText from "./CardText";
import CardSettings from "./CardSettings";

const CardView = ({ className }) => {
  return (
    <article className={className}>
      <CardInner>
        <CardControl />
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
  margin: 0 40px 26px 0;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;
