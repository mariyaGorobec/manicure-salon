import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import CalendarItem from "../../components/Calendar/CalendarItem";
import { enroll } from "../../store/bodyColorAndMenu/bodyColorAndMenuSlice";

const Enroll = () => {

  const [freeWindows, setFreeWindows] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4444/getFreeWindows")
        .then((res) => setFreeWindows(res.data));
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();

  (() => {
    dispatch(enroll());
  })();

  return (
    <>
    <CalendarItem freeWindows={freeWindows}></CalendarItem>
    </>
  );
};

export default Enroll;
