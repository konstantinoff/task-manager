import React, { useState } from "react";
import styled from "styled-components";
import appContext from "./state";

import Normalize from "./Normalize";
import Globals from "./Globals";
import MainControl from "./components/MainControl";
import SearchInput from "./components/SearchInput";
import Filter from "./components/Filter";
import Board from "./components/Board";

const globalState = {
  cards: {
    2: {
      id: 2,
      text: "Текст1",
      color: null,
      repeat: null
    },
    3: {
      id: 3,
      text: "Текст2",
      color: "pink",
      repeat: null
    },
    4: {
      id: 4,
      text: "Текст3",
      color: "yellow",
      repeat: "repeat"
    }
  },
  cardsIds: ["2", "3", "4"],
  EditingCard: null
};

function App({ className }) {
  const [state, setState] = useState(globalState);
  return (
    <appContext.Provider value={{ state, setState }}>
      <main className={className}>
        <MainControl />
        <SearchInput modifiers="hidden" />
        <Filter />
        <Board />
        <Globals />
        <Normalize />
      </main>
    </appContext.Provider>
  );
}

export default styled(App)`
  padding-top: 50px;
  padding-bottom: 20px;
`;
