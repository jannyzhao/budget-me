import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DateSelector({ month, year, onMonthChange, onYearChange }) {
  const monthList = allMonths.map((month, monthIndex) => {
    return (
      <Dropdown.Item key={month} eventKey={monthIndex + 1}>
        {month}
      </Dropdown.Item>
    );
  });
  const displayMonth = allMonths[month - 1];

  const maxOffset = 10;
  const allYears = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i <= maxOffset; i++) {
    allYears.push(currentYear - i);
  }
  const yearList = allYears.map((year) => {
    return (
      <Dropdown.Item key={year} eventKey={year}>
        {year}
      </Dropdown.Item>
    );
  });

  return (
    <Container className="fluid d-flex gap-2 mb-4 justify-content-center">
      <DropdownButton
        id="month"
        title={displayMonth}
        onSelect={onMonthChange}
        size="lg"
        variant="light"
        name="month"
        defaultValue={displayMonth}
      >
        {monthList}
      </DropdownButton>
      <DropdownButton
        id="year"
        title={year ? year : "Year"}
        onSelect={onYearChange}
        size="lg"
        variant="light"
        name="year"
        defaultValue={year}
      >
        {yearList}
      </DropdownButton>
    </Container>
  );
}

export default DateSelector;
