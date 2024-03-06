import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);


  const events = [
    {
      title: "Event 1",
      start: new Date(2024, 2, 6, 10, 0),
      end: new Date(2024, 2, 6, 12, 0),
    },
    {
      title: "Event 2",
      start: new Date(2024, 2, 7, 14, 0),
      end: new Date(2024, 2, 7, 16, 0),
    },
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;