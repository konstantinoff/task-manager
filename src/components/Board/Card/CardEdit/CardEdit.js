import React, { useContext } from "react";
import styled from "styled-components";
import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardEditText from "./CardEditText";
import CardEditUpload from "./CardEditUpload";
import appContext from "../../../../state";

const CardEdit = ({ className, id }) => {
  const { state } = useContext(appContext);
  const { color, repeat } = state.cards[id];

  return (
    <article className={className}>
      <CardInner modifiers="edit">
        <CardControl modifiers="edit" id={id} />
        <CardColorBar modifiers={["edit", color, repeat]} />
        <CardEditText id={id} />
        <CardEditUpload />
      </CardInner>
    </article>
  );
};

export default styled(CardEdit)`
  position: relative;
  width: 210px;
`;
