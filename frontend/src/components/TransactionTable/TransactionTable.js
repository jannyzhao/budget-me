import Table from "react-bootstrap/Table";
import React from "react";
import TransactionRow from "./TransactionRow";
import AddTransaction from "./AddTransaction";
import { useSelector } from "react-redux";

function TransactionTable({ transactions }) {
  const currentUser = useSelector((state) => state.session.user);

  if (transactions.length === 0) {
    return (
      <>
        <div>{currentUser.username} has no Transactions</div>
        <AddTransaction />
      </>
    );
  }
  return (
    <>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>DATE</th>
            <th>COMPANY</th>
            <th>DESCRIPTION</th>
            <th>TYPE</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
            <th>MODIFY</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <TransactionRow key={transaction._id} transaction={transaction} />
          ))}
        </tbody>
      </Table>
      <AddTransaction className="mt-2" />
    </>
  );
}
// }

export default TransactionTable;
