import React, { useState } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import globalState from "../../state";

const MainControl = props => {
  const [state, setState] = useState(globalState);
  return (
    <Control className="container">
      <Header>TASKMANAGER</Header>
      <section className="control__btn-wrap">
        <MenuButton>Tasks</MenuButton>
        {/*<MenuButton onClick={() => setState(...state, cards: )}>Add New Task</MenuButton>*/}
        <MenuButton>Statistic</MenuButton>
        <MenuButton>Search</MenuButton>
      </section>
    </Control>
  );
};

const Header = styled.h1`
  font-size: 16px;
  line-height: 23px;
  margin: 0 auto 0 0;
`;

const Control = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 8px;
  align-items: baseline;
`;

export default MainControl;
