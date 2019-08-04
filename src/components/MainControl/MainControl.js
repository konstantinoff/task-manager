import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const MainControl = props => (
  <Control className="container">
    <Header>TASKMANAGER</Header>
    <section className="control__btn-wrap">
      <MenuButton name="Tasks" />
      <MenuButton name="Add New Task" />
      <MenuButton name="Statistic" />
      <MenuButton name="Search" />
    </section>
  </Control>
);

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
