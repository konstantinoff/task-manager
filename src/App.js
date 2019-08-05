import React from "react";
import styled from "styled-components";
import Normalize from "./Normalize";
import Globals from "./Globals";

import MainControl from "./components/MainControl";
import SearchInput from "./components/SearchInput";
import Filter from "./components/Filter";
import Board from "./components/Board";

function App({ className }) {
  return (
    <>
      <main className={className}>
        <MainControl />
        <SearchInput modifiers="hidden" />
        <Filter />
        <Board />

        <Globals />
        <Normalize />
      </main>
    </>
  );
}

export default styled(App)`
  padding-top: 50px;
  padding-bottom: 20px;
`;
