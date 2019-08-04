import React from "react";
import styled from "styled-components";

const CardControl = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default styled(CardControl)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  transition: opacity 0.3s ease-out;
`;
