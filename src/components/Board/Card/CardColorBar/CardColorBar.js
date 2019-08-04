import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const Wave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="159"
    height="10"
    viewBox="0 0 159 10"
  >
    <g
      fill="none"
      fillRule="nonzero"
      stroke="#000"
      strokeLinecap="square"
      strokeWidth="5"
    >
      <path d="M4 4l9.257 2.463L21.367 4l7.927 2.463L38.736 4l9.117 2.463L56.103 4l8.685 2.463L73.472 4l8.684 2.463L90.84 4l8.684 2.463L108.208 4l8.684 2.463L125.576 4l8.684 2.463L142.943 4M146.423 4l9.257 2.463" />
    </g>
  </svg>
);

const CardColorBar = ({ className, modifiers }) => (
  <div className={className}>
    <Wave modifiers={modifiers} />
  </div>
);

export default styled(CardColorBar)`
  width: 100%;
  height: 10px;
  font-size: 0;
  background-color: black;
  margin-bottom: 10px;
  stroke: #000000;
  ${applyStyleModifiers({
    hidden: () => `
    max-height: 0;
    padding: 0;
    transition: max-height 0.3s ease-out;
    `
  })}
`;
