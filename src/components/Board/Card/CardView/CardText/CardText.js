import React from "react";
import styled from "styled-components";

const CardText = ({ text, className }) => {
  return <span className={className}>{text}</span>;
};

export default styled(CardText)``;
