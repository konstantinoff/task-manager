import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../state";

import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardEditText from "./CardEditText";
import CardEditUpload from "./CardEditUpload";
import CardEditDates from "./CardEditDates";

const CardEdit = ({ className, id }) => {
  const { cards } = useContext(StateContext);
  const { color, repeat } = cards[id];

  return (
    <article className={className}>
      <CardInner modifiers="edit">
        <CardControl modifiers="edit" id={id} />
        <CardColorBar modifiers={["edit", color, repeat]} />
        <CardEditText id={id} />
        <CardEditUpload />
        <CardEditDates id={id} />
      </CardInner>
    </article>
  );
};

export default styled(CardEdit)`
  position: relative;
  width: 210px;
`;
