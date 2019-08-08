import React, { useContext } from "react";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import styled from "styled-components";
import "antd/dist/antd.css";
import { StateContext } from "../../../../../state";

const CardEditDates = ({ id }) => {
  const { cards, isDateEditToggler, setDate, setTime } = useContext(
    StateContext
  );
  const { isDateEdit, time, date } = cards[id];

  const dateNow = date ? moment.unix(date) : null;
  const timeNow = time ? moment.unix(time) : null;

  const dateFormatList = ["D MMMM", "DD/MM/YY"];

  return (
    <CardEditDatesWrapper>
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
            onChange={date => {
              setDate(id, date);
            }}
            defaultValue={dateNow}
            format={dateFormatList}
          />

          <TimePicker
            onChange={time => {
              setTime(id, time);
            }}
            defaultValue={timeNow}
            format="HH:mm"
          />
        </>
      )}
      <CardEditDateButtonPick>repeat: no</CardEditDateButtonPick>
    </CardEditDatesWrapper>
  );
};

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

const CardEditDatesWrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid #000000;
  margin-bottom: 10px;
`;

export default CardEditDates;
