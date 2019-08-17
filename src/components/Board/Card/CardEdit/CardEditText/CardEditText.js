import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../../state";

const CardEditText = ({ className, id }) => {
  const textareaEl = useRef(null);
  const { cards, setText } = useContext(StateContext);
  const { text } = cards[id];

  const moveCaretAtEnd = e => {
    let temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  };

  useEffect(() => {
    textareaEl.current.focus();
  }, []);
  return (
    <textarea
      ref={textareaEl}
      onFocus={moveCaretAtEnd}
      onChange={e => {
        setText(id, e.target.value);
      }}
      className={className}
      defaultValue={text}
    />
  );
};

export default styled(CardEditText)`
  resize: none;
  height: 98px;
  width: 100%;
  outline: none;
  padding: 3px;
  font-family: monospace;
  font-weight: 500;
  font-size: 16px;
  overflow: auto;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.2);
`;
