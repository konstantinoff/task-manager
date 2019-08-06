import React, { useContext, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import appContext from "../../state";

const Board = props => {
  const { state, setState } = useContext(appContext);
  console.log(state);
  return (
    <section className="board container">
      <BoardTasks>
        {state.cardsIds.map(id => {
          return <Card key={id} id={id} />;
        })}
      </BoardTasks>
    </section>
  );
};

const BoardTasks = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 400px;
`;

export default Board;
