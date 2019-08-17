import React from "react";
import styled from "styled-components";

import Normalize from "./Normalize";
import Globals from "./Globals";
import "./fonts/index.css";
import MainControl from "./components/MainControl";
import SearchInput from "./components/SearchInput";
import Filter from "./components/Filter";
import Board from "./components/Board";

const Main = styled.main`
  padding-top: 50px;
  padding-bottom: 20px;
`;
function App() {
  return (
    <Main>
      <MainControl />
      <SearchInput modifiers="hidden" />
      <Filter />
      <Board />
      <Globals />
      <Normalize />
    </Main>
  );
}

export default App;
