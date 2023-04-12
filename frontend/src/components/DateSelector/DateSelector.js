import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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
    <div className="d-flex gap-2">
      <DropdownButton
        id="month"
        title={displayMonth}
        onSelect={onMonthChange}
        size="md"
        variant="outline-primary"
        name="month"
        defaultValue={displayMonth}
      >
        {monthList}
      </DropdownButton>
      <DropdownButton
        id="year"
        title={year ? year : "Year"}
        onSelect={onYearChange}
        size="md"
        variant="outline-primary"
        name="year"
        defaultValue={year}
      >
        {yearList}
      </DropdownButton>
    </div>
  );
}

export default DateSelector;
