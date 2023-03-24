import React from "react";
import Button from "react-bootstrap/esm/Button";
import { deleteTransaction } from "../../store/transactions";
import { useDispatch } from "react-redux";
import EditTransaction from "./EditTransaction";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  console.log({ dateString });
  console.log({ date });
  return date.toLocaleDateString();
};

function TransactionRow({ transaction }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTransaction(transaction._id));
  };

  return (
    <tr>
      <td>{formatDate(transaction.date)}</td>
      <td>{transaction.company}</td>
      <td>{transaction.description}</td>
      <td>{transaction.type}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <EditTransaction transaction={transaction} />
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
