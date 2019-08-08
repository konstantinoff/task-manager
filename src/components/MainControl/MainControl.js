import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../state";

const MainControl = () => {
  const { addNewCard } = useContext(StateContext);
  return (
    <Control className="container">
      <Header>TASKMANAGER</Header>
      <MenuButton>Tasks</MenuButton>
      <MenuButton onClick={addNewCard}>Add New Task</MenuButton>
      <MenuButton>Statistic</MenuButton>
      <MenuButton>Search</MenuButton>
    </Control>
  );
};

const MenuButton = styled.button`
  font-size: 16px;
  display: inline-flex;
  font-weight: normal;
  color: inherit;
  border: none;
  text-transform: uppercase;
  background-color: inherit;
  text-decoration: none;
  margin-left: 54px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-out;
  }
`;

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
