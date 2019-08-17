import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../state";

import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardEditText from "./CardEditText";
import CardEditUpload from "./CardEditUpload";
import CardEditDates from "./CardEditDates";
import CardEditHashTags from "./CardEditHastags";
import CardEditRepeat from "./CardEditRepeat";
import CardEditColors from "./CardEditColors";
import CardEditDelete from "./CardEditDelete";

//todo: написать функцию, которая закрывает карточку по клику вне ее

const CardEdit = ({ className, id }) => {
  const { cards, onDeleteCard } = useContext(StateContext);
  const { color, repeated } = cards[id];
  const isRepeated = repeated.size ? "repeat" : null;
  return (
    <article className={className}>
      <CardInner modifiers="edit">
        <CardControl modifiers="edit" id={id} />
        <CardColorBar modifiers={["edit", color, isRepeated]} />
        <CardEditText id={id} />
        <CardEditUpload id={id} />
        <CardEditDates id={id} />
        <CardEditRepeat id={id} />
        <CardEditHashTags id={id} />
        <CardEditColors id={id} />
        <CardEditDelete onClick={() => onDeleteCard(id)}>Delete</CardEditDelete>
      </CardInner>
    </article>
  );
};

export default styled(CardEdit)`
  position: relative;
  width: 210px;
`;
