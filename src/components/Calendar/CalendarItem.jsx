import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";
import "./Calendar.css";
import axios from "axios";
import React from "react";
import { format } from "date-fns/esm";

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

function CalendarItem() {
  const [freeWindows, setFreeWindows] = React.useState([]);
  const [masters, setMasters] = React.useState([]);
  const [timeIsOpened, setTimeIsOpened] = React.useState("");
  const [time, setTime] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4444/getFreeWindows")
        .then((res) => setFreeWindows(res.data));
    }
    fetchData();
  }, []);

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
    <>
      <div>
        <Calendar
          onClickDay={(value) => timing(value)}
          tileClassName={tileClassName}
          minDate={minDate}
          maxDate={maxDate}
        ></Calendar>
      </div>
      <div>
        <ul>
          {masters.map((item) => (
            <li
              onClick={() => {
                setTimeIsOpened(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        {timeIsOpened ? (
          <ul>
            {time
              .filter((item) => item.name === timeIsOpened)
              .map((item) => (
                <li>{item.time}</li>
              ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CalendarItem;
