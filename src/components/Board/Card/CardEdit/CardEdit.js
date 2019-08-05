import React from "react";
import styled from "styled-components";
import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardEditText from "./CardEditText";
import CardEditUpload from "./CardEditUpload";

const CardEdit = ({ className }) => {
  return (
    <article className={className}>
      <CardInner modifiers="edit">
        <CardControl modifiers="edit" />
        <CardColorBar modifiers="pink" />
        <CardEditText />
        <CardEditUpload />
      </CardInner>
    </article>
  );
};

export default styled(CardEdit)`
  position: relative;
  width: 210px;
`;
