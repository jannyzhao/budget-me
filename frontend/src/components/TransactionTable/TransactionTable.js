import Table from "react-bootstrap/Table";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import TransactionRow from "./TransactionRow";
import AddTransaction from "./AddTransaction";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserTransactions,
  clearTransactionErrors,
} from "../../store/transactions";

function TransactionTable({ transactions }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userTransactions = useSelector((state) =>
    Object.values(state.transactions.user)
  );

  useEffect(() => {
    dispatch(fetchUserTransactions(currentUser._id));
    return () => dispatch(clearTransactionErrors());
  }, [currentUser, dispatch]);

  // if (userTransactions.length === 0) {
  //   return (
  //     <Container>
  //       <div>{currentUser.username} has no Transactions</div>
  //     </Container>
  //   );
  // } else {
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
