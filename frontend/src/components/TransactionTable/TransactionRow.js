import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";

function TransactionRow({ date, company, description, amount }) {
  const [type, setType] = useState();
  const [category, setCategory] = useState();

  const handleType = (e) => {
    setType(e);
  };

  const handleCategory = (e) => {
    setCategory(e);
  };
  return (
    <tr>
      <td>{date}</td>
      <td>{company}</td>
      <td>{description}</td>
      <td>
        <DropdownButton
          id="type"
          title={type ? type : "Type"}
          onSelect={handleType}
          variant="light"
        >
          <Dropdown.Item eventKey="Income">Income</Dropdown.Item>
          <Dropdown.Item eventKey="Expense">Expense</Dropdown.Item>
          <Dropdown.Item eventKey="Saving">Saving</Dropdown.Item>
        </DropdownButton>
      </td>
      <td>
        <DropdownButton
          id="category"
          title={category ? category : "Category"}
          onSelect={handleCategory}
          variant="light"
        >
          <Dropdown.Item eventKey="Groceries">Groceries</Dropdown.Item>
          <Dropdown.Item eventKey="Food">Food</Dropdown.Item>
          <Dropdown.Item eventKey="Clothing">Clothing</Dropdown.Item>
          <Dropdown.Item eventKey="Paycheck">Paycheck</Dropdown.Item>
        </DropdownButton>
      </td>
      <td>{amount}</td>
    </tr>
  );
}

export default TransactionRow;
