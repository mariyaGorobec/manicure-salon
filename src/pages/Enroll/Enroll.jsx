import React from "react";

import { useDispatch } from "react-redux";
import CalendarItem from "../../components/Calendar/CalendarItem";
import { enroll } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";

const Enroll = () => {
  const dispatch = useDispatch();

  (() => {
    dispatch(enroll());
  })();

  return (
    <>
    <CalendarItem></CalendarItem>
    </>
  );
};

export default Enroll;
