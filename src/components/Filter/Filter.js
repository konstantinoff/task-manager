import React, { useContext } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import { StateContext } from "../../state";

const Filter = () => {
  const { cardsIds, cards } = useContext(StateContext);
  const numberOfFavorites = cardsIds.reduce((acc, item) => {
    if (cards[item].repeated.size) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return (
    <MainFilter className="container">
      <FilterButton modifiers="active">All {cardsIds.length}</FilterButton>
      <FilterButton>Overdue</FilterButton>
      <FilterButton>Today</FilterButton>
      <FilterButton>Favorites</FilterButton>
      <FilterButton>Repeating {numberOfFavorites}</FilterButton>
      <FilterButton>Tags</FilterButton>
      <FilterButton>Archive</FilterButton>
    </MainFilter>
  );
};

const MainFilter = styled.section`
  margin-bottom: 29px;
  display: flex;
  justify-content: space-between;
`;

export default Filter;
