import React from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import CalendarItem from "../../components/Calendar/CalendarItem";
import { enroll } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";
import  {fetchContent}  from "../../store/Calendar/calendarSlice";

const Enroll = () => {

  const dispatch = useDispatch();

 
    (() => {
      dispatch(enroll());
    })();


    
  return (
    <>
      {<CalendarItem></CalendarItem>}
    </>
  );
};

export default Enroll;
