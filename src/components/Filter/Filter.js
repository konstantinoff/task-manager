import React, { useContext } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import { StateContext } from "../../state";

const Filter = () => {
  const { cardsIds } = useContext(StateContext);
  return (
    <MainFilter className="container">
      <FilterButton modifiers="active">All {cardsIds.length}</FilterButton>
      <FilterButton>Overdue</FilterButton>
      <FilterButton>Today</FilterButton>
      <FilterButton>Favorites</FilterButton>
      <FilterButton>Repeating</FilterButton>
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
