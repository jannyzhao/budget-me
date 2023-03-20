import Table from "react-bootstrap/Table";
import React from "react";
import Container from "react-bootstrap/Container";
import TransactionRow from "./TransactionRow";
import AddTransaction from "./AddTransaction";
import { useSelector } from "react-redux";

function TransactionTable({ transactions }) {
  const currentUser = useSelector((state) => state.session.user);

  if (transactions.length === 0) {
    return (
      <Container>
        <div>{currentUser.username} has no Transactions</div>
      </Container>
    );
  }
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
          {transactions?.map((transaction) => (
            <TransactionRow
              date={transaction.date}
              amount={transaction.amount}
              company={transaction.company}
              description={transaction.description}
              type={transaction.type}
              category={transaction.category}
            />
          ))}
        </tbody>
      </Table>
      <AddTransaction />
    </Container>
  );
}
// }

export default TransactionTable;
