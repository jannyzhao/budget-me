import React from "react";
import Button from "react-bootstrap/esm/Button";
import { deleteTransaction } from "../../store/transactions";
import { useDispatch } from "react-redux";
import EditTransaction from "./EditTransaction";

function TransactionRow({ transaction }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTransaction(transaction._id));
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.company}</td>
      <td>{transaction.description}</td>
      <td>{transaction.type}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <EditTransaction />
      </td>
      <td>
        <Button variant="outline-danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TransactionRow;
