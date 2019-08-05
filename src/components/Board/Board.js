import React from "react";
import styled from "styled-components";
import Card from "./Card";
import stateExample from "../../state";

const Board = props => (
  <section className="board container">
    <BoardTasks>
      {stateExample.cardsIds.map(id => {
        return <Card key={id} id={id} />;
      })}

      {/*<Card isEdit={false} />*/}
      {/*<Card isEdit={true} />*/}
    </BoardTasks>
  </section>
);

const BoardTasks = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-bottom: 400px;
`;

export default Board;
