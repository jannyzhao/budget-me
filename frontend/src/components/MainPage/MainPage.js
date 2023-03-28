import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import TransactionTable from "../TransactionTable/TransactionTable";
import AmountSpent from "../AmountSpent/AmountSpent";
import Balance from "../Balance/Balance";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserTransactions,
  clearTransactionErrors,
} from "../../store/transactions";

function MainPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userTransactions = useSelector((state) =>
    Object.values(state.transactions.user)
  );

  useEffect(() => {
    dispatch(fetchUserTransactions(currentUser._id));
    return () => dispatch(clearTransactionErrors());
  }, [currentUser, dispatch]);

  return (
    <Container className="pt-4">
      <div className="d-flex overflow-auto gap-3 mb-4">
        <MonthlyIncome />
        <AmountSpent />
        <Balance />
      </div>
      <TransactionTable transactions={userTransactions}/>
    </Container>
  );
}

export default MainPage;
