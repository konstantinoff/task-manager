import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { StateContext } from "../../state";

const Board = props => {
  const { cardsIds } = useContext(StateContext);
  return (
    <section className="board container">
      <BoardTasks>
        {cardsIds.map(id => {
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
