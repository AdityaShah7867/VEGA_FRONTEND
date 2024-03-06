import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

export default function Calendar(props) {
  return <BigCalendar {...props} localizer={localizer} />;
}
