import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 64px;
`;

const CardImage = ({ className, image }) => {
  return (
    <Wrap>
      <img className={className} src={image} alt="Sample" />
    </Wrap>
  );
};

export default styled(CardImage)`
  height: 45px;
  max-width: 80px;
  width: auto;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;
