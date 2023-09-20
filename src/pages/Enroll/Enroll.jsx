import React from "react";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import CalendarItem from "../../components/Calendar/CalendarItem";
import { enroll } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";
import ReservationForm from "../../components/ReservationForm/ReservationForm";

const Enroll = () => {

  const dispatch = useDispatch();

    (() => {
      dispatch(enroll());
    })();
    
    const isOnclickToReservation = useSelector((state) => state.calendar.isOnclickToReservation);

  return (
    <>
     {
      isOnclickToReservation ? <ReservationForm></ReservationForm> : <CalendarItem></CalendarItem>
     }
    </>
  );
};

export default Enroll;
