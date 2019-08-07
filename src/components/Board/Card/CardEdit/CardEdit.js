import React, { useContext } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import moment from "moment";

import CardInner from "../CardInner";
import CardControl from "../CardControl";
import CardColorBar from "../CardColorBar";
import CardEditText from "./CardEditText";
import CardEditUpload from "./CardEditUpload";
import { StateContext } from "../../../../state";

const CardEditDateButtonPick = styled.button`
  display: flex;
  width: auto;
  border: 0;
  padding: 0;
  margin: 0 0 10px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid #000000;
  outline: none;
  background-color: transparent;
`;

const CardEditDates = styled.div`
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid #000000;
  margin-bottom: 10px;
`;

const CardEdit = ({ className, id }) => {
  const { cards, isDateEditToggler } = useContext(StateContext);
  const { color, repeat, isDateEdit, date, time } = cards[id];

  const { MonthPicker, RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";
  const monthFormat = "YYYY/MM";
  const now = moment();
  const dateFormatList = ["D MMMM", "DD/MM/YY"];

  return (
    <article className={className}>
      <CardInner modifiers="edit">
        <CardControl modifiers="edit" id={id} />
        <CardColorBar modifiers={["edit", repeat, color]} />
        <CardEditText id={id} />
        <CardEditUpload />
        <CardEditDates>
          <CardEditDateButtonPick
            onClick={() => {
              isDateEditToggler(id);
            }}
          >
            date:{isDateEdit ? "Yes" : "No"}
          </CardEditDateButtonPick>
          {isDateEdit && (
            <>
              <DatePicker
                defaultValue={moment(now, dateFormatList[0])}
                format={dateFormatList}
              />
              <CardEditDateButtonPick>{time}</CardEditDateButtonPick>
            </>
          )}
          <CardEditDateButtonPick>repeat: no</CardEditDateButtonPick>
        </CardEditDates>
      </CardInner>
    </article>
  );
};

export default styled(CardEdit)`
  position: relative;
  width: 210px;
`;
