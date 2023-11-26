import { React, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

function Journal() {
  const [date, setDate] = useState(new Date());

  const getJournals = (date) => {
    console.log("date: ", date);
  };

  return (
    <>
      <div className="flex flex-col max-w-full grow items-stretch pt-4 text-gray-500">
        <div className="mx-auto">
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => getJournals(date)}
          />
        </div>
      </div>
    </>
  );
}

export default Journal;
