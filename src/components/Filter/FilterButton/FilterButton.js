import { applyStyleModifiers } from "styled-components-modifiers";
import styled from "styled-components";

const FilterButton = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #ffffff;
  border: none;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
  }
  ${applyStyleModifiers({
    active: () => `
      text-shadow: 1px 0 0 #000000;
    `
  })}
`;

export default FilterButton;
