import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";
import "./Calendar.css";
import React from "react";
import style from "./Calendar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, getMasters, getTime, resetData, getSelectedMaster, getSelectedTime, buttonResrvation, onClickToReservation } from "../../store/Calendar/calendarSlice";

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

const CalendarItem = () => {

  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch]);

  const appointments = useSelector((state) => state.calendar.appointments);
  const masters = useSelector((state) => state.calendar.masters);
  const time = useSelector((state) => state.calendar.time);
  const selectedMaster = useSelector((state) => state.calendar.selectedMaster);
  const selectedTime = useSelector((state) => state.calendar.selectedTime);
  const goToReservation = useSelector((state)=> state.calendar.goToReservation)

  const highlightedDates = appointments.map((item) => new Date(item.time));

  const getArrayOfMasters = (value) => {
    dispatch(getMasters({ value: value }))
  };

  const getArrayOfTime = (value) => {
    dispatch(getTime({ value: value }))
  }

  function tileClassName({ date, view }) {
    if (date > minDate && date <= maxDate) {
      if (
        view === "month" &&
        highlightedDates.find((dDate) => isSameDay(dDate, date))
      ) {
        return "highlight";
      } else {
        return "noHighlight";
      }
    }
  }

  const minDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 30
  );

  return (<div style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: "5%",
  }}>
    <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
      <h3 style={{ textAlign: "center" }}>
        выберите свободную дату, нажав на зелёную ячейку
      </h3>
      <div>
        <Calendar
          onClickDay={(value) => {
            dispatch(resetData());
            getArrayOfMasters(value);
          }}
          tileClassName={tileClassName}
          minDate={minDate}
          maxDate={maxDate}
        ></Calendar>
      </div>
    </div>
    <div style={{ width: "20%" }}>
      {masters.length > 0 ? <>
        <h3 style={{ textAlign: "center" }}>выберите мастера</h3>
        <ul style={{ margin: 0, padding: 0 }}>
          {masters.map((item) => (
            <li
              className={
                selectedMaster === item
                  ? style["changeMaster"] && style["yellow"]
                  : style["changeMaster"]
              }
              onClick={() => {
                getArrayOfTime(item);
                dispatch(getSelectedMaster({ value: item }))
              }}>
              {item}
            </li>
          ))}
        </ul>
      </> : ''}
    </div>
    <div style={{ width: "20%", textAlign: "center" }}>
      {time.length > 0 ? <>
        <h3 style={{ textAlign: "center" }}>выберите время</h3>
        <ul style={{ margin: 0, padding: 0 }}>
          {time.map((item) => (
            <li
              className={
                selectedTime === item.time
                  ? style["changeTime"] && style["red"]
                  : style["changeTime"]}
              onClick={() => {dispatch(getSelectedTime({ time: item.time, id: item.id }))
              dispatch(buttonResrvation())}}>
              {item.time}
            </li>
          ))}
        </ul>
        {
          goToReservation === true ? <button onClick={()=> dispatch(onClickToReservation())} className={style.goToReservation}>Записаться</button> : ''
        }
      </> : ""}
    </div>
  </div>
  );
}

/*function CalendarItem({ freeWindows }) {
  const [changeColorMaster, setChangeColorMaster] = React.useState(false);
  const [goToReservation, setGoToReservation] = React.useState(false);
  const [changeColorTime, setChangeColorTime] = React.useState(false);
  const [masters, setMasters] = React.useState("");
  const [timeIsOpened, setTimeIsOpened] = React.useState("");
  const [time, setTime] = React.useState([]);
  const dispatch = useDispatch();

  const highlightedDates = freeWindows.map((item) => new Date(item.date));

  const minDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 30
  );

  const timing = (value) => {
    setTimeIsOpened("");
    setMasters("");
    const window = format(new Date(value), "yyyy.MM.dd");
    const isFreeWindow = freeWindows.filter((item) => item.date === window);
    if (isFreeWindow.length > 0) {
      const mastersNamesAndTime = isFreeWindow.map((item) => ({
        name: item.master.name,
        time: item.time,
      }));
      setTime(mastersNamesAndTime);
      const mastersName = [
        ...new Set(mastersNamesAndTime.map((item) => item.name)),
      ];
      setMasters(mastersName);
    }
  };

  function tileClassName({ date, view }) {
    if (date > minDate && date <= maxDate) {
      if (
        view === "month" &&
        highlightedDates.find((dDate) => isSameDay(dDate, date))
      ) {
        return "highlight";
      } else {
        return "noHighlight";
      }
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        marginLeft: "5%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
        <h3 style={{ textAlign: "center" }}>
          выберите свободную дату, нажав на зелёную ячейку
        </h3>
        <div>
          {" "}
          <Calendar
            onClickDay={(value) => {
              timing(value);
              setChangeColorMaster(false);
              setChangeColorTime(false);
            }}
            tileClassName={tileClassName}
            minDate={minDate}
            maxDate={maxDate}
          ></Calendar>
        </div>
      </div>
      <div style={{ width: "20%" }}>
        {masters ? (
          <>
            <h3 style={{ textAlign: "center" }}>выберите мастера</h3>
            <ul style={{ margin: 0, padding: 0 }}>
              {masters.map((item) => (
                <li
                  className={
                    changeColorMaster === item
                      ? style["changeMaster"] && style["yellow"]
                      : style["changeMaster"]
                  }
                  onClick={() => {
                    setGoToReservation(false);
                    setChangeColorMaster(false);
                    setChangeColorTime(false);
                    setTimeIsOpened(item);
                    setChangeColorMaster(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
      <div style={{ width: "20%", textAlign: "center" }}>
        {timeIsOpened ? (
          <>
            <h3>выберите удобное время</h3>
            <ul style={{ margin: 0, padding: 0 }}>
              {time
                .filter((item) => item.name === timeIsOpened)
                .map((item) => (
                  <li
                    className={
                      changeColorTime === item.time
                        ? style["changeTime"] && style["red"]
                        : style["changeTime"]
                    }
                    onClick={() => {
                      setChangeColorTime(item.time);
                      setGoToReservation(true);
                    }}
                  >
                    {item.time}
                  </li>
                ))}
            </ul>
            {goToReservation ? <button className={style.goToReservation}>Перейти к резервированию</button> : ""}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}*/

export default CalendarItem;
