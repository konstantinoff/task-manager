import React, { useContext } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import appContext from "../../state";

const MainControl = props => {
  const { state, setState } = useContext(appContext);
  const newCardIndex = state.cardsIds.length;

  const defaultCard = {
    id: newCardIndex,
    text: "Введите текст",
    color: null,
    deadLine: "",
    time: "",
    repeat: "",
    isFavorite: false,
    hashtags: []
  };
  const UpdatedCards = { ...state.cards, [newCardIndex]: defaultCard };
  const UpdatedCardIds = [...state.cardsIds, newCardIndex.toString()];
  return (
    <Control className="container">
      <Header>TASKMANAGER</Header>
      <section className="control__btn-wrap">
        <MenuButton>Tasks</MenuButton>
        <MenuButton
          onClick={() =>
            setState({
              ...state,
              cardsIds: UpdatedCardIds,
              cards: UpdatedCards
            })
          }
        >
          Add New Task
        </MenuButton>
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
