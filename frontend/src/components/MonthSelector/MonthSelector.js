import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function MonthSelector() {
  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", { month: "long" })
  );

  const handleMonth = (e) => {
    setMonth(e);
  };
  const loggedIn = useSelector((state) => {
    return !!state.session.user;
  });

  return (
    <Container fluid>
      <DropdownButton
        id="month"
        title={month ? month : "Month"}
        onSelect={handleMonth}
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
    </Container>
  );
}

export default MonthSelector;
