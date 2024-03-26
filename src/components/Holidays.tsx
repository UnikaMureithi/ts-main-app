import React, { useState } from "react";

const Holidays = () => {
  const [holidays, setHolidays] = useState<Holidays>([
    "New Year's Day",
    "Good Friday",
    "Easter",
    "Labour Day",
    "Christmas Day",
    "Boxing Day",
  ]);

  return (
    <>
      <p>This is a list of some Holidays in the year:</p>
      <ul>
        {holidays.map((holiday, index) => {
          return <li key={index}>{holiday}</li>;
        })}
      </ul>
    </>
  );
};

export default Holidays;