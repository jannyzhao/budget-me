import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function MainPage() {
  const [buttonTitle, setButtonTitle] = useState();

  const handleDropdownSelect = (e) => {
    setButtonTitle(e);
  };

  // const handleAddTransaction = () => {

  // }

  return (
    <Container>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>DATE</th>
            <th>COMPANY</th>
            <th>DESCRIPTION</th>
            <th>TYPE</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>03/15/2023</td>
            <td>NIKE</td>
            <td>Shoes</td>
            <DropdownButton
              id="type"
              title={buttonTitle ? buttonTitle : "Type"}
              onSelect={handleDropdownSelect}
              variant="light"
            >
              <Dropdown.Item eventKey="Income">Income</Dropdown.Item>
              <Dropdown.Item eventKey="Expense">Expense</Dropdown.Item>
              <Dropdown.Item eventKey="Saving">Saving</Dropdown.Item>
            </DropdownButton>
            <td>Clothing</td>
            <td>$150.00</td>
          </tr>
          <tr>
            <td>03/17/2023</td>
            <td>DOORDASH</td>
            <td>Marufuku</td>
            <DropdownButton
              id="type"
              title={buttonTitle ? buttonTitle : "Type"}
              onSelect={handleDropdownSelect}
              variant="light"
            >
              <Dropdown.Item eventKey="Income">Income</Dropdown.Item>
              <Dropdown.Item eventKey="Expense">Expense</Dropdown.Item>
              <Dropdown.Item eventKey="Saving">Saving</Dropdown.Item>
            </DropdownButton>
            <td>Food</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td>03/19/2023</td>
            <td>META</td>
            <td>Direct Deposit</td>
            <DropdownButton
              id="type"
              title={buttonTitle ? buttonTitle : "Type"}
              onSelect={handleDropdownSelect}
              variant="light"
            >
              <Dropdown.Item eventKey="Income">Income</Dropdown.Item>
              <Dropdown.Item eventKey="Expense">Expense</Dropdown.Item>
              <Dropdown.Item eventKey="Saving">Saving</Dropdown.Item>
            </DropdownButton>
            <td>Paycheck</td>
            <td>$4000.00</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="btn btn-success">+ Add Transaction</Button>
    </Container>
  );
}

export default MainPage;
