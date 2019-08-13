import React, { useContext } from "react";
import { Tag } from "antd";
import styled from "styled-components";
import { StateContext } from "../../../../../state";

const CardEditHashTags = ({ id }) => {
  const { cards, inputHasTagHandler, onDeleteTagHandler } = useContext(
    StateContext
  );
  const { hashtags } = cards[id];

  const inputHandler = e => {
    if (e.keyCode === 13) {
      inputHasTagHandler(id, e.target.value);
      e.target.value = "";
    }
  };

  const onCloseHandler = (e, tag) => {
    e.preventDefault();
    onDeleteTagHandler(id, tag);
  };

  return (
    <HashtagsList>
      {Array.from(hashtags).map((tag, index) => {
        const [color, text] = tag;
        return (
          <StyledTag
            key={index.toString()}
            onClose={e => onCloseHandler(e, tag)}
            color={color}
            closable
          >
            {text}
          </StyledTag>
        );
      })}
      <HashTagInput
        placeholder="Type new hashtag here"
        onKeyDown={e => inputHandler(e)}
      />
    </HashtagsList>
  );
};

const HashtagsList = styled.div`
  list-style: none;
  margin: 0 0 10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const StyledTag = styled(Tag)`
  margin: 2px 3px;
  .anticon-close {
    vertical-align: -0.175em;
  }
  &:before {
    content: "# ";
  }
`;

const HashTagInput = styled.input`
  display: flex;
  width: 100%;
  border: 0;
  margin-top: 5px;
  border-bottom: 2px solid #000000;
  outline: none;
  font-size: 12px;
`;

export default CardEditHashTags;
