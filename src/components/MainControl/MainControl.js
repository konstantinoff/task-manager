import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const MainControl = props => {
  return (
    <Control className="container">
      <Header>TASKMANAGER</Header>
      <MenuButton>Tasks</MenuButton>
      <MenuButton>Add New Task</MenuButton>
      <MenuButton>Statistic</MenuButton>
      <MenuButton>Search</MenuButton>
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
