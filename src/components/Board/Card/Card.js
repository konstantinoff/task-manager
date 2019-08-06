import React, { useState } from "react";
import styled from "styled-components";
import CardView from "./CardView";
import CardEdit from "./CardEdit";
import appContext from "../../../state";

const setEditContext = React.createContext({});

const Card = ({ className, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { state, setState } = useState(appContext);
  return (
    <div className={className}>
      <setEditContext.Provider value={{ setIsEdit, isEdit }}>
        {isEdit ? <CardEdit id={id} /> : <CardView id={id} />}
      </setEditContext.Provider>
    </div>
  );
};

export { setEditContext };

export default styled(Card)`
  margin: 0 40px 26px 0;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;
