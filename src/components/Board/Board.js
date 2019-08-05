import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Board = props => (
  <section className="board container">
    <BoardTasks>
      <Card />
    </BoardTasks>
  </section>
);

const BoardTasks = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 400px;
`;

export default Board;
