import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";

const Filter = props => (
  <MainFilter className="container">
    <FilterButton modifiers="active" name="All" count="15" />
    <FilterButton name="Overdue" count="15" />
    <FilterButton name="Today" count="15" />
    <FilterButton name="Favorites" count="15" />
    <FilterButton name="Repeating" count="15" />
    <FilterButton name="Tags" count="15" />
    <FilterButton name="Archive" count="15" />
  </MainFilter>
);

const MainFilter = styled.section`
  margin-bottom: 29px;
  display: flex;
  justify-content: space-between;
`;

export default Filter;
