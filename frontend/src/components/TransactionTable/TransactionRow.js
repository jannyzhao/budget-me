import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { deleteTransaction } from "../../store/transactions";
import { useDispatch } from "react-redux";

function TransactionRow({ transaction }) {
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);
  const dispatch = useDispatch();

  const handleType = (e) => {
    setType(e);
  };

  const handleCategory = (e) => {
    setCategory(e);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTransaction(transaction._id));
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.company}</td>
      <td>{transaction.description}</td>
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
      <td>{transaction.amount}</td>
      <td>
        <Button variant="outline-danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TransactionRow;
