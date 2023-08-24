import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";
import "./Calendar.css";
import React from "react";
import { format } from "date-fns/esm";
import style from './Calendar.module.scss'

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

function CalendarItem({ freeWindows }) {
  const [masters, setMasters] = React.useState('');
  const [timeIsOpened, setTimeIsOpened] = React.useState("");
  const [time, setTime] = React.useState([]);

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
    <div style={{display:"flex", justifyContent: 'space-around', alignItems:"flex-start", marginLeft:"5%"}}>
      <div style={{display: "flex", flexDirection: 'column', width:"40%"}}>
        <h3>выберите свободную дату, нажав на зелёную ячейку</h3>
      <div style={{marginLeft:"10%"}}>  <Calendar
          onClickDay={(value) => timing(value)}
          tileClassName={tileClassName}
          minDate={minDate}
          maxDate={maxDate}
        ></Calendar></div>
      </div>
      <div style={{width:"20%"}}>
        {masters ? (
          <>
            <h3 style={{textAlign: 'center'}}>выберите мастера</h3>
            <ul style={{margin:0, padding:0}}>
              {masters.map((item) => (
                <li className={style.changeMaster}
                  onClick={() => {
                    setTimeIsOpened(item);
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
      <div style={{width:"20%", textAlign:"center"}}>
        {timeIsOpened ? (
          <>
            <h3>выберите удобное время</h3>
            <ul style={{margin:0, padding:0}}>
              {time
                .filter((item) => item.name === timeIsOpened)
                .map((item) => (
                  <li className = {style.changeTime}>{item.time}</li>
                ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CalendarItem;
