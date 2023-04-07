import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function DateSelector() {
  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", { month: "long" })
  );
  let maxOffset = 10;
  let currentYear = new Date().getFullYear();
  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(currentYear - x);
  }
  const [year, setYear] = useState(currentYear);

  const yearList = allYears.map((x) => {
    return (
      <Dropdown.Item key={x} eventKey={x}>
        {x}
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
        title={month ? month : "Month"}
        onSelect={handleMonth}
        size="lg"
        variant="light"
        name="month"
        defaultValue={month}
      >
        <Dropdown.Item eventKey="January">January</Dropdown.Item>
        <Dropdown.Item eventKey="February">February</Dropdown.Item>
        <Dropdown.Item eventKey="March">March</Dropdown.Item>
        <Dropdown.Item eventKey="April">April</Dropdown.Item>
        <Dropdown.Item eventKey="May">May</Dropdown.Item>
        <Dropdown.Item eventKey="June">June</Dropdown.Item>
        <Dropdown.Item eventKey="July">July</Dropdown.Item>
        <Dropdown.Item eventKey="August">August</Dropdown.Item>
        <Dropdown.Item eventKey="September">September</Dropdown.Item>
        <Dropdown.Item eventKey="October">October</Dropdown.Item>
        <Dropdown.Item eventKey="November">November</Dropdown.Item>
        <Dropdown.Item eventKey="December">December</Dropdown.Item>
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
