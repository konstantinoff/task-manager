import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const SearchInput = ({ className }) => (
  <section className="main__search search container">
    <input
      type="text"
      className={className}
      id="search__input"
      placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
    />
  </section>
);

export default styled(SearchInput)`
  width: 100%;
  height: 40px;
  max-height: 40px;
  box-sizing: border-box;
  border: 3px solid #000000;
  padding-left: 45%;
  font-size: 16px;
  font-weight: bold;
  color: inherit;
  font-family: inherit;
  outline: none;
  transition: max-height 0.3s ease-out;
  &::placeholder {
    font-weight: normal;
    color: #e7e3e3;
    font-size: 16px;
  }
  ${applyStyleModifiers({
    hidden: () => `
    max-height: 0;
    padding: 0;
    transition: max-height 0.3s ease-out;
    `
  })}
`;
