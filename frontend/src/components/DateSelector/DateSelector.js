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

function DateSelector() {
  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", { month: "numeric" })
  );
  const monthList = allMonths.map((month, monthIndex) => {
    return <Dropdown.Item eventKey={monthIndex + 1}>{month}</Dropdown.Item>;
  });
  const maxOffset = 10;
  const currentYear = new Date().getFullYear();
  const allYears = [];
  for (let i = 0; i <= maxOffset; i++) {
    allYears.push(currentYear - i);
  }
  const [year, setYear] = useState(currentYear);

  const yearList = allYears.map((year) => {
    return (
      <Dropdown.Item key={year} eventKey={year}>
        {year}
      </Dropdown.Item>
    );
  });
  const handleMonth = (e) => {
    setMonth(e);
  };
  const handleYear = (e) => {
    setYear(e);
  };
  const loggedIn = useSelector((state) => {
    return !!state.session.user;
  });

  return (
    <Container className="fluid d-flex gap-2 mb-4 justify-content-center">
      <DropdownButton
        id="month"
        title={allMonths[month - 1]}
        onSelect={handleMonth}
        size="lg"
        variant="light"
        name="month"
        defaultValue={allMonths[month - 1]}
      >
        {monthList}
      </DropdownButton>
      <DropdownButton
        id="year"
        title={year ? year : "Year"}
        onSelect={handleYear}
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
