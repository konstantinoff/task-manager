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
          <StyledDatePicker
            onChange={date => {
              setDate(id, date);
            }}
            defaultValue={dateNow}
            format={dateFormatList}
          />

          <StyledTimePicker
            onChange={time => {
              setTime(id, time);
            }}
            use12Hours
            format="h:mm a"
            defaultValue={timeNow}
          />
        </>
      )}
    </CardEditDatesWrapper>
  );
};

const StyledTimePicker = styled(TimePicker)`
  .ant-time-picker-input {
    display: flex;
    width: 100px;
    border: 0;
    border-radius: 0;
    padding: 0;
    margin: 0 0 10px;
    height: 15px;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    color: #000000;
    border-bottom: 1px solid #000000;
    outline: none;
    background-color: transparent;
    &::placeholder {
      color: inherit;
    }
  }
  .ant-time-picker > div {
    position: relative;
  }

  .ant-time-picker-clear,
  .ant-time-picker-icon {
    top: 5px;
    right: 27px;
    cursor: pointer;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  .ant-calendar-picker-input {
    display: flex;
    width: 100px;
    border: 0;
    border-radius: 0;
    padding: 0;
    margin: 0 0 10px;
    height: 15px;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    color: #000000;
    border-bottom: 1px solid #000000;
    outline: none;
    background-color: transparent;
    &::placeholder {
      color: inherit;
    }
    &:hover {
      border-bottom-color: #000;
    }
  }
  .ant-calendar-picker > div {
    position: relative;
  }
  .ant-calendar-picker-clear,
  .ant-calendar-picker-icon {
    top: 5px;
    right: 0;
    cursor: pointer;
  }
  &:hover {
    border-color: #000;
  }
  .ant-calendar-picker:hover,
  .ant-calendar-picker-input:not(.ant-input-disabled) {
    border-color: #000;
  }
`;

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
