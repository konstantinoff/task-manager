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
    0: {
      id: 2,
      text: "Текст1",
      color: null,
      repeat: null,
      hashtags: ["тег1", "тег2", "тег3"]
    },
    1: {
      id: 3,
      text: "Текст2",
      color: "pink",
      repeat: null,
      hashtags: ["тег4", "тег5", "тег6"]
    },
    2: {
      id: 4,
      text: "Текст3",
      color: "yellow",
      repeat: "repeat",
      hashtags: ["тег7", "тег8", "тег9"]
    }
  },
  cardsIds: ["0", "1", "2"],
  editingCard: "0"
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
